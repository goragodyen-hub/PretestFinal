/* ==========================================================================
   Past Simple Tense Learning Suite - Practice Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initUnscrambleChips();
    initWordBankClick();
});

// Normalizer for flexible answer checking
function cleanString(str) {
    if (!str) return '';
    return str
        .toLowerCase()
        .replace(/’/g, "'")
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
        .replace(/\s+/g, ' ')
        .trim();
}

// --------------------------------------------------------------------------
// Part 1 Check: Regular & Irregular Verbs (8 items)
// --------------------------------------------------------------------------
const p1Answers = {
    p1_1: ["watched"],
    p1_2: ["studied"],
    p1_3: ["stopped"],
    p1_4: ["played"],
    p1_5: ["bought"],
    p1_6: ["saw"],
    p1_7: ["wrote"],
    p1_8: ["went"]
};

// --------------------------------------------------------------------------
// Part 2 Check: Fill in the Blanks (6 items)
// --------------------------------------------------------------------------
const p2Answers = {
    p2_1: ["visited"],
    p2_2: ["didn't have", "did not have", "didnt have"],
    p2_3: ["ate"],
    p2_4: ["didn't watch", "did not watch", "didnt watch"],
    p2_5: ["arrived"],
    p2_6: ["lost"]
};

// --------------------------------------------------------------------------
// Part 3 Check: Sentence Transformation (6 items)
// --------------------------------------------------------------------------
const p3Answers = {
    p3_1_neg: ["ken didn't buy a new comic book yesterday", "ken did not buy a new comic book yesterday"],
    p3_1_q: ["did ken buy a new comic book yesterday"],
    p3_2_neg: ["they didn't go to the cinema last sunday", "they did not go to the cinema last sunday"],
    p3_2_q: ["did they go to the cinema last sunday"],
    p3_3_neg: ["jane didn't make a delicious cake for the party", "jane did not make a delicious cake for the party"],
    p3_3_q: ["did jane make a delicious cake for the party"]
};

// --------------------------------------------------------------------------
// Part 4 Check: Error Correction (5 items)
// --------------------------------------------------------------------------
const p4Answers = {
    p4_1: ["he didn't go to school yesterday because he was sick", "he did not go to school yesterday because he was sick", "go"],
    p4_2: ["did you see the news this morning", "see"],
    p4_3: ["we studied english together last night", "studied"],
    p4_4: ["my father drank coffee two hours ago", "drank"],
    p4_5: ["did they play badminton after class yesterday", "play"]
};

// --------------------------------------------------------------------------
// Unscramble Data (Part 5)
// --------------------------------------------------------------------------
const unscrambleData = [
    {
        id: 1,
        words: ["football", "played", "after school", "They", "yesterday"],
        validAnswers: [
            "they played football after school yesterday",
            "yesterday they played football after school",
            "they played football yesterday after school"
        ]
    },
    {
        id: 2,
        words: ["watch", "didn't", "TV", "last night", "My brother"],
        validAnswers: [
            "my brother didn't watch tv last night",
            "last night my brother didn't watch tv"
        ]
    },
    {
        id: 3,
        words: ["you", "go", "last weekend", "to the mall", "Did", "?"],
        validAnswers: [
            "did you go to the mall last weekend",
            "did you go last weekend to the mall"
        ]
    },
    {
        id: 4,
        words: ["a delicious cake", "baked", "Mom", "two days ago"],
        validAnswers: [
            "mom baked a delicious cake two days ago",
            "two days ago mom baked a delicious cake"
        ]
    }
];

// Interactive Chip Handling
function initUnscrambleChips() {
    unscrambleData.forEach(item => {
        const pool = document.getElementById(`unscramble-pool-${item.id}`);
        const slot = document.getElementById(`unscramble-slot-${item.id}`);
        if (!pool || !slot) return;

        pool.innerHTML = '';
        slot.innerHTML = '';

        item.words.forEach((word, idx) => {
            const chip = document.createElement('span');
            chip.className = 'word-tag';
            chip.textContent = word;
            chip.dataset.word = word;
            chip.dataset.originId = `${item.id}-${idx}`;

            chip.addEventListener('click', () => {
                if (chip.parentElement === pool) {
                    slot.appendChild(chip);
                } else {
                    pool.appendChild(chip);
                }
            });

            pool.appendChild(chip);
        });
    });
}

function resetUnscramble(id) {
    const item = unscrambleData.find(d => d.id === id);
    if (!item) return;
    const pool = document.getElementById(`unscramble-pool-${id}`);
    const slot = document.getElementById(`unscramble-slot-${id}`);
    if (!pool || !slot) return;

    while (slot.firstChild) {
        pool.appendChild(slot.firstChild);
    }
    const res = document.getElementById(`unscramble-res-${id}`);
    if (res) {
        res.className = 'answer-feedback';
        res.innerHTML = '';
    }
}

// --------------------------------------------------------------------------
// Step-by-Step Verb 10 items (Part 6)
// --------------------------------------------------------------------------
const p6Verbs = {
    v_1: ["ate"],
    v_2: ["bought"],
    v_3: ["watched"],
    v_4: ["went"],
    v_5: ["cleaned"],
    v_6: ["saw"],
    v_7: ["read"],
    v_8: ["listened"],
    v_9: ["wrote"],
    v_10: ["drank"]
};

// Word Bank chip click helper
function initWordBankClick() {
    document.querySelectorAll('.bank-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            const word = chip.getAttribute('data-word');
            navigator.clipboard.writeText(word).then(() => {
                const toast = document.getElementById('toast');
                if (toast) {
                    toast.textContent = `คัดลอก "${word}" แล้ว! สามารถกดวางลงในช่องแต่งประโยคได้เลย`;
                    toast.style.display = 'block';
                    setTimeout(() => { toast.style.display = 'none'; }, 2500);
                }
            }).catch(() => {
                // fallback
            });
        });
    });
}

// --------------------------------------------------------------------------
// Master Check Function
// --------------------------------------------------------------------------
function checkAllAnswers() {
    let score = 0;
    let total = 0;

    // 1. Part 1: Verbs (8 pts)
    Object.keys(p1Answers).forEach(key => {
        total++;
        const input = document.getElementById(key);
        if (!input) return;
        const val = cleanString(input.value);
        const isCorrect = p1Answers[key].some(ans => cleanString(ans) === val);
        applyFeedback(input, isCorrect);
        if (isCorrect) score++;
    });

    // 2. Part 2: Fill in Blanks (6 pts)
    Object.keys(p2Answers).forEach(key => {
        total++;
        const input = document.getElementById(key);
        if (!input) return;
        const val = cleanString(input.value);
        const isCorrect = p2Answers[key].some(ans => cleanString(ans) === val);
        applyFeedback(input, isCorrect);
        if (isCorrect) score++;
    });

    // 3. Part 3: Sentence Transformation (6 pts)
    Object.keys(p3Answers).forEach(key => {
        total++;
        const input = document.getElementById(key);
        if (!input) return;
        const val = cleanString(input.value);
        const isCorrect = p3Answers[key].some(ans => cleanString(ans) === val);
        applyFeedback(input, isCorrect);
        if (isCorrect) score++;
    });

    // 4. Part 4: Error Correction (5 pts)
    Object.keys(p4Answers).forEach(key => {
        total++;
        const input = document.getElementById(key);
        if (!input) return;
        const val = cleanString(input.value);
        const isCorrect = p4Answers[key].some(ans => val.includes(cleanString(ans)));
        applyFeedback(input, isCorrect);
        if (isCorrect) score++;
    });

    // 5. Part 5: Unscramble (4 pts)
    unscrambleData.forEach(item => {
        total++;
        const slot = document.getElementById(`unscramble-slot-${item.id}`);
        const resBox = document.getElementById(`unscramble-res-${item.id}`);
        if (!slot || !resBox) return;

        const chips = Array.from(slot.children);
        const assembled = cleanString(chips.map(c => c.textContent).join(' '));
        const isCorrect = item.validAnswers.some(ans => cleanString(ans) === assembled);

        resBox.className = `answer-feedback show ${isCorrect ? 'success' : 'error'}`;
        if (isCorrect) {
            resBox.innerHTML = `✔️ ถูกต้องยอดเยี่ยม! (${item.validAnswers[0]})`;
            score++;
        } else {
            resBox.innerHTML = `❌ ยังไม่ถูกต้อง (ตัวอย่างที่ถูก: <strong>${item.validAnswers[0]}</strong>)`;
        }
    });

    // 6. Part 6: Verb V.2 checking (10 pts)
    Object.keys(p6Verbs).forEach(key => {
        total++;
        const input = document.getElementById(key);
        if (!input) return;
        const val = cleanString(input.value);
        const isCorrect = p6Verbs[key].some(ans => cleanString(ans) === val);
        applyFeedback(input, isCorrect);
        if (isCorrect) score++;
    });

    // Update Score Board
    const scoreBadge = document.getElementById('total-score');
    if (scoreBadge) {
        scoreBadge.textContent = `${score} / ${total}`;
    }

    const percentage = Math.round((score / total) * 100);
    const scoreFeedback = document.getElementById('score-feedback');
    if (scoreFeedback) {
        scoreFeedback.style.display = 'block';
        if (percentage >= 80) {
            scoreFeedback.innerHTML = `🎉 ยอดเยี่ยมมาก! ได้คะแนน <strong>${percentage}%</strong> (${score}/${total} ข้อ) เข้าใจ Past Simple Tense ได้อย่างดีเยี่ยม!`;
            scoreFeedback.className = 'answer-feedback show success';
        } else if (percentage >= 50) {
            scoreFeedback.innerHTML = `👍 ทำได้ดี! ได้คะแนน <strong>${percentage}%</strong> (${score}/${total} ข้อ) ลองทบทวนจุดที่ผิดและลองทำใหม่อีกครั้งนะ!`;
            scoreFeedback.className = 'answer-feedback show';
            scoreFeedback.style.backgroundColor = '#fef3c7';
            scoreFeedback.style.color = '#92400e';
        } else {
            scoreFeedback.innerHTML = `💪 พยายามอีกนิด! ได้คะแนน <strong>${percentage}%</strong> (${score}/${total} ข้อ) แนะนำให้อ่านสรุปไวยากรณ์ในโมดูลที่ 1 แล้วกลับมาลองใหม่ครับ`;
            scoreFeedback.className = 'answer-feedback show error';
        }
    }

    // Smooth scroll to score bar
    document.getElementById('action-bar')?.scrollIntoView({ behavior: 'smooth' });
}

function applyFeedback(inputElem, isCorrect) {
    inputElem.classList.remove('is-correct', 'is-wrong');
    inputElem.classList.add(isCorrect ? 'is-correct' : 'is-wrong');
    
    // Find sibling feedback box if present
    const fb = inputElem.parentElement.querySelector('.field-feedback');
    if (fb) {
        fb.className = `field-feedback answer-feedback show ${isCorrect ? 'success' : 'error'}`;
        fb.innerHTML = isCorrect ? '✔️ ถูกต้อง' : '❌ ผิด (ดูเฉลยด้านล่าง)';
    }
}

// Reset all inputs
function resetAll() {
    if (!confirm('ต้องการล้างคำตอบทั้งหมดและเริ่มทำใหม่ใช่หรือไม่?')) return;
    
    document.querySelectorAll('.practice-input').forEach(input => {
        input.value = '';
        input.classList.remove('is-correct', 'is-wrong');
    });

    unscrambleData.forEach(item => {
        resetUnscramble(item.id);
    });

    const scoreBadge = document.getElementById('total-score');
    if (scoreBadge) scoreBadge.textContent = '0 / 39';

    const scoreFeedback = document.getElementById('score-feedback');
    if (scoreFeedback) scoreFeedback.style.display = 'none';

    document.querySelectorAll('.master-answer-section').forEach(sec => {
        sec.style.display = 'none';
    });
}

// Toggle Reveal Master Explanations
function toggleMasterKeys() {
    const sections = document.querySelectorAll('.master-answer-section');
    sections.forEach(sec => {
        sec.style.display = sec.style.display === 'block' ? 'none' : 'block';
    });
}
