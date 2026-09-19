/**
 * Google Apps Script สำหรับสร้าง Past Simple Tense Google Slides โดยอัตโนมัติ
 * วิธีใช้:
 * 1. ไปที่ https://script.google.com แล้วกด "New Project"
 * 2. วางโค้ดนี้ลงไปแทนที่โค้ดเดิมทั้งหมด
 * 3. กดบันทึก (Save) แล้วกด "Run" (เรียกใช้) ฟังก์ชัน createPastSimpleSlides
 * 4. ไปที่ Google Drive จะพบไฟล์ Google Slides สร้างเสร็จสมบูรณ์ทันที
 */

function createPastSimpleSlides() {
  var title = "Past Simple Tense - Presentation (Grade 8)";
  var presentation = SlidesApp.create(title);
  
  // Slide 1: Cover
  var s1 = presentation.getSlides()[0];
  s1.getBackground().setSolidFill("#1e3a8a");
  var t1 = s1.insertTextBox("PAST SIMPLE TENSE\nสรุปหลักไวยากรณ์และเทคนิคจำแม่น (ม.2)", 60, 120, 600, 180);
  t1.getText().getTextStyle().setForegroundColor("#ffffff").setFontSize(32).setBold(true);
  
  // Slide 2: Core Concept
  var s2 = presentation.appendSlide(SlidesApp.PredefinedLayout.TITLE_AND_BODY);
  s2.getTitle().asShape().getText().setText("หัวใจหลักของ Past Simple Tense");
  s2.getBody().asShape().getText().setText(
    "💡 ใช้เมื่อไหร่?\n" +
    "ใช้กับเหตุการณ์หรือการกระทำที่ \"เกิดขึ้นและจบสิ้นลงอย่างสมบูรณ์แล้วในอดีต\" (ปัจจุบันไม่ได้ทำแล้ว)\n\n" +
    "⏰ คำบอกเวลาที่พบบ่อย (Time Expressions):\n" +
    "• yesterday (yesterday morning, yesterday afternoon)\n" +
    "• last + เวลา (last night, last week, last month, last year)\n" +
    "• ช่วงเวลา + ago (two hours ago, three days ago, ten years ago)\n" +
    "• in + ปีอดีต (in 2020, in the past)"
  );
  
  // Slide 3: Structures
  var s3 = presentation.appendSlide(SlidesApp.PredefinedLayout.TITLE_AND_BODY);
  s3.getTitle().asShape().getText().setText("โครงสร้างประโยค 3 รูปแบบ (+, -, ?)");
  s3.getBody().asShape().getText().setText(
    "1. บอกเล่า (+): Subject + V.2\n" +
    "   • We played football yesterday.\n" +
    "   • He went to Japan last year.\n\n" +
    "2. ปฏิเสธ (-): Subject + didn't + V.inf (รูปเดิม)\n" +
    "   • We didn't play football.\n" +
    "   • He didn't go to Japan.\n\n" +
    "3. คำถาม (?): Did + Subject + V.inf ...?\n" +
    "   • Did they play football?\n" +
    "   • Did he go to Japan?"
  );

  // Slide 4: Regular Verbs (-ed)
  var s4 = presentation.appendSlide(SlidesApp.PredefinedLayout.TITLE_AND_BODY);
  s4.getTitle().asShape().getText().setText("กฎ 5 ข้อของการเติม -ed (Regular Verbs)");
  s4.getBody().asShape().getText().setText(
    "1. เติม -ed ทั่วไป: watch → watched, clean → cleaned\n" +
    "2. ลงท้ายด้วย e: เติม -d ทันที เช่น live → lived, arrive → arrived\n" +
    "3. พยัญชนะ + y: เปลี่ยน y เป็น i แล้วเติม -ed เช่น study → studied\n" +
    "4. สระ + y: เติม -ed ได้ทันที เช่น play → played, stay → stayed\n" +
    "5. 1 สระ 1 ตัวสะกด: เบิ้ลตัวสะกดท้ายก่อนเติม -ed เช่น stop → stopped, plan → planned"
  );

  // Slide 5: Irregular Verbs
  var s5 = presentation.appendSlide(SlidesApp.PredefinedLayout.TITLE_AND_BODY);
  s5.getTitle().asShape().getText().setText("กริยาเปลี่ยนรูปยอดฮิต (Irregular Verbs)");
  s5.getBody().asShape().getText().setText(
    "• eat → ate (กิน)\n" +
    "• buy → bought (ซื้อ)\n" +
    "• go → went (ไป)\n" +
    "• see → saw (เห็น/พบ)\n" +
    "• have → had (มี/กิน)\n" +
    "• make → made (ทำ/สร้าง)\n" +
    "• lose → lost (ทำหาย/แพ้)\n" +
    "• read → read [เรด] (อ่าน)\n" +
    "• write → wrote (เขียน)\n" +
    "• drink → drank (ดื่ม)"
  );

  // Slide 6: Golden Rule
  var s6 = presentation.appendSlide(SlidesApp.PredefinedLayout.TITLE_AND_BODY);
  s6.getTitle().asShape().getText().setText("⚠️ กฎทอง \"ถอดเครื่องแบบ\" (จุดตายข้อสอบ)");
  s6.getBody().asShape().getText().setText(
    "กฎเหล็ก: เมื่อไหร่ที่มี Did หรือ didn't โผล่มา กริยาแท้ต้องถูกถอดรูปอดีตทิ้ง กลับเป็นช่อง 1 (V.inf) เสมอ!\n\n" +
    "❌ สิ่งที่เด็กๆ ชอบผิด:\n" +
    "• He didn't went to school.\n" +
    "• Did you saw that cat?\n" +
    "• We didn't watched TV.\n\n" +
    "✔️ ประโยคที่ถูกต้อง:\n" +
    "• He didn't go to school.\n" +
    "• Did you see that cat?\n" +
    "• We didn't watch TV."
  );

  // Slide 7: 3 Steps Sentence Building
  var s7 = presentation.appendSlide(SlidesApp.PredefinedLayout.TITLE_AND_BODY);
  s7.getTitle().asShape().getText().setText("สูตรกันตาย 3 สเต็ปสร้างประโยคจาก Verb");
  s7.getBody().asShape().getText().setText(
    "โจทย์ให้ Verb มาคำเดียว ให้จำ 3 สเต็ป:\n" +
    "Step 1: ผันเป็น V.2 ให้ถูก (เช่น eat → ate)\n" +
    "Step 2: เติมนามสั้นๆ 1 ตัว (ทำอะไร? เช่น noodles)\n" +
    "Step 3: ประกอบร่างเข้าสูตร: I + [V.2] + [กรรม] + yesterday.\n" +
    "➔ ได้ประโยค: \"I ate noodles yesterday.\"\n\n" +
    "💡 คลังคำนามช่วยชีวิต: noodles, milk, pizza, my room, YouTube, football, to school"
  );

  // Slide 8: -ed vs -ing Adjectives
  var s8 = presentation.appendSlide(SlidesApp.PredefinedLayout.TITLE_AND_BODY);
  s8.getTitle().asShape().getText().setText("Adjectives: ลงท้าย -ed VS -ing");
  s8.getBody().asShape().getText().setText(
    "😊 ลงท้ายด้วย -ed = \"รู้สึก...\" (คน/สัตว์ รู้สึก...)\n" +
    "• bored (รู้สึกเบื่อ), interested (รู้สึกสนใจ), relaxed (รู้สึกผ่อนคลาย)\n" +
    "• ตัวอย่าง: \"I was bored during the lesson.\"\n\n" +
    "🎬 ลงท้ายด้วย -ing = \"น่า...\" (ลักษณะของสิ่งของ/เหตุการณ์)\n" +
    "• boring (น่าเบื่อ), interesting (น่าสนใจ), relaxing (น่านั่งพักผ่อน)\n" +
    "• ตัวอย่าง: \"That movie was really boring.\""
  );

  // Slide 9: 3 Exam Traps
  var s9 = presentation.appendSlide(SlidesApp.PredefinedLayout.TITLE_AND_BODY);
  s9.getTitle().asShape().getText().setText("3 จุดหลอกยอดฮิตที่เด็ก ม.2 ชอบเสียคะแนน");
  s9.getBody().asShape().getText().setText(
    "1. สะกดคำผิดเมื่อเติม -ed กับตัว y:\n" +
    "   • หน้า y เป็นพยัญชนะ เปลี่ยน y เป็น i ➔ studied (ไม่ใช่ studyed ❌)\n" +
    "   • หน้า y เป็นสระ เติม -ed ได้เลย ➔ played (ไม่ใช่ plaied ❌)\n\n" +
    "2. คำบอกเวลากลางคืน:\n" +
    "   • ภาษาอังกฤษใช้ last night เท่านั้น (ห้ามใช้ yesterday night ❌)\n\n" +
    "3. การแสดงความเป็นเจ้าของ Double Genitive:\n" +
    "   • a friend of mine (ไม่ใช่ a friend of me ❌)"
  );

  // Slide 10: Closing
  var s10 = presentation.appendSlide(SlidesApp.PredefinedLayout.TITLE_AND_BODY);
  s10.getTitle().asShape().getText().setText("🎉 พร้อมลุยทำแบบฝึกหัดแล้ว!");
  s10.getBody().asShape().getText().setText(
    "\"ฝึกฝนสม่ำเสมอ จับตาดู Did/didn't และจำรูปกริยาให้แม่น แล้วลูกจะทำข้อสอบได้อย่างมั่นใจแน่นอน\"\n\n" +
    "คุณพ่อสามารถเปิดหน้าแบบฝึกหัดให้น้องเริ่มทำต่อได้เลยครับ 👏"
  );

  Logger.log("สร้างสไลด์สำเร็จ URL: " + presentation.getUrl());
}
