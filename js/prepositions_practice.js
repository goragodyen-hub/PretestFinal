/* ==========================================================================
   Prepositions & Phrasal Verbs Practice Logic
   ========================================================================== */

function cleanPrepAnswer(str) {
    if (!str) return '';
    return str
        .toLowerCase()
        .replace(/’/g, "'")
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
        .replace(/\s+/g, ' ')
        .trim();
}

// --------------------------------------------------------------------------
// Part 1: LOOK Phrasal Verbs (6 items)
// --------------------------------------------------------------------------
const p1PrepAnswers = {
    // 1. You should [look up] the word in a dictionary.
    prep_1_1: ["up", "look up"],
    // 2. The police are [looking into] the robbery.
    prep_1_2: ["into", "looking into", "look into"],
    // 3. [Look at] that beautiful rainbow!
    prep_1_3: ["at", "look at"],
    // 4. Who will [look after] your cat while you are on vacation?
    prep_1_4: ["after", "look after"],
    // 5. I am [looking for] my glasses. Have you seen them?
    prep_1_5: ["for", "looking for", "look for"],
    // 6. She is [looking in] the mirror to comb her hair.
    prep_1_6: ["in", "looking in", "look in"]
};

// --------------------------------------------------------------------------
// Part 2: Place & Furniture Prepositions (6 items)
// --------------------------------------------------------------------------
const p2PrepAnswers = {
    // 1. Grandfather likes to sit [in] an armchair.
    prep_2_1: ["in"],
    // 2. We are relaxing [on] the sofa in the living room.
    prep_2_2: ["on"],
    // 3. Ken usually studies [at] his desk every evening.
    prep_2_3: ["at"],
    // 4. The cat is sleeping [under] the table.
    prep_2_4: ["under"],
    // 5. Please don't stand [in front of] the television.
    prep_2_5: ["in front of", "front of"],
    // 6. My house is [next to] the library.
    prep_2_6: ["next to", "next"]
};

// --------------------------------------------------------------------------
// Part 3: Time Prepositions (6 items)
// --------------------------------------------------------------------------
const p3PrepAnswers = {
    // 1. The movie starts [at] 8.00 pm.
    prep_3_1: ["at"],
    // 2. We don't have classes [on] Saturday and Sunday.
    prep_3_2: ["on"],
    // 3. My brother was born [in] 2010.
    prep_3_3: ["in"],
    // 4. I usually drink coffee [in] the morning.
    prep_3_4: ["in"],
    // 5. She will visit her grandparents [at] the weekend.
    prep_3_5: ["at", "on"],
    // 6. They studied English [for] two hours yesterday.
    prep_3_6: ["for"]
};

// --------------------------------------------------------------------------
// Part 4: Collocations & Dependent Prepositions (6 items)
// --------------------------------------------------------------------------
const p4PrepAnswers = {
    // 1. Why are you angry [with] him?
    prep_4_1: ["with"],
    // 2. Mom always cares [about] our health.
    prep_4_2: ["about"],
    // 3. I enjoy listening [to] pop music.
    prep_4_3: ["to"],
    // 4. Please give this book back [to] Sarah.
    prep_4_4: ["to"],
    // 5. She feels very confident [about] passing the test.
    prep_4_5: ["about"],
    // 6. Peter is a good friend [of mine].
    prep_4_6: ["of mine", "mine"]
};

// --------------------------------------------------------------------------
// Part 5: Error Correction (4 items)
// --------------------------------------------------------------------------
const p5PrepAnswers = {
    // 1. He sat on an armchair. -> in / He sat in an armchair.
    prep_5_1: ["in", "he sat in an armchair"],
    // 2. She called me yesterday night. -> last night / She called me last night.
    prep_5_2: ["last night", "last", "she called me last night"],
    // 3. Jane is a cousin of me. -> mine / of mine / Jane is a cousin of mine.
    prep_5_3: ["mine", "of mine", "jane is a cousin of mine"],
    // 4. Did you listen music yesterday? -> to / listen to / Did you listen to music yesterday?
    prep_5_4: ["to", "listen to", "did you listen to music yesterday"]
};

// --------------------------------------------------------------------------
// Check All Answers Function
// --------------------------------------------------------------------------
function checkPrepositions() {
    let score = 0;
    let total = 0;

    const allGroups = [
        { dict: p1PrepAnswers, prefix: 'p1' },
        { dict: p2PrepAnswers, prefix: 'p2' },
        { dict: p3PrepAnswers, prefix: 'p3' },
        { dict: p4PrepAnswers, prefix: 'p4' },
        { dict: p5PrepAnswers, prefix: 'p5' }
    ];

    allGroups.forEach(group => {
        Object.keys(group.dict).forEach(id => {
            total++;
            const input = document.getElementById(id);
            if (!input) return;

            const userVal = cleanPrepAnswer(input.value);
            const isCorrect = group.dict[id].some(valid => cleanPrepAnswer(valid) === userVal);

            input.classList.remove('is-correct', 'is-wrong');
            input.classList.add(isCorrect ? 'is-correct' : 'is-wrong');

            if (isCorrect) score++;
        });
    });

    // Update Score Board
    const scoreBadge = document.getElementById('prep-total-score');
    if (scoreBadge) {
        scoreBadge.textContent = `${score} / ${total}`;
    }

    const percentage = Math.round((score / total) * 100);
    const feedbackBox = document.getElementById('prep-score-feedback');
    if (feedbackBox) {
        feedbackBox.style.display = 'block';
        if (percentage >= 80) {
            feedbackBox.className = 'answer-feedback show success';
            feedbackBox.innerHTML = `🎉 ยอดเยี่ยมมาก! ได้คะแนน <strong>${percentage}%</strong> (${score}/${total} ข้อ) จำ Prepositions & Phrasal Verbs ได้แม่นยำมาก!`;
        } else if (percentage >= 50) {
            feedbackBox.className = 'answer-feedback show';
            feedbackBox.style.backgroundColor = '#fef3c7';
            feedbackBox.style.color = '#92400e';
            feedbackBox.innerHTML = `👍 ทำได้ดี! ได้คะแนน <strong>${percentage}%</strong> (${score}/${total} ข้อ) ลองกดปุ่ม "ดูเฉลยละเอียด" ด้านล่างเพื่อทบทวนจุดที่ผิดนะ`;
        } else {
            feedbackBox.className = 'answer-feedback show error';
            feedbackBox.innerHTML = `💪 พยายามอีกนิด! ได้คะแนน <strong>${percentage}%</strong> (${score}/${total} ข้อ) แนะนำให้กลับไปดูสรุปในหน้าบทเรียนแล้วลองใหม่อีกครั้งครับ`;
        }
    }

    document.getElementById('action-bar')?.scrollIntoView({ behavior: 'smooth' });
}

function resetPrepositions() {
    if (!confirm('ต้องการล้างคำตอบทั้งหมดและเริ่มทำใหม่ใช่หรือไม่?')) return;

    document.querySelectorAll('.practice-input').forEach(input => {
        input.value = '';
        input.classList.remove('is-correct', 'is-wrong');
    });

    const scoreBadge = document.getElementById('prep-total-score');
    if (scoreBadge) scoreBadge.textContent = '0 / 28';

    const feedbackBox = document.getElementById('prep-score-feedback');
    if (feedbackBox) feedbackBox.style.display = 'none';

    const masterSec = document.getElementById('prep-master-keys');
    if (masterSec) masterSec.style.display = 'none';
}

function togglePrepMasterKeys() {
    const masterSec = document.getElementById('prep-master-keys');
    if (!masterSec) return;
    masterSec.style.display = masterSec.style.display === 'block' ? 'none' : 'block';
}
