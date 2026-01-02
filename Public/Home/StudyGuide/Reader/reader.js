//GST 101
function GST101_1(){
    document.getElementById("loading").style.opacity = "1";
    setTimeout(()=>{
        document.getElementById("loading").style.opacity = "0";
        window.location.reload();
    }, 2000)
}

function GST101_2() {
    document.getElementById("loading").style.opacity = "1";

    setTimeout(()=>{
    document.getElementById("introTopic").textContent = "Listening & Comprehension";
    document.getElementById("introContent").textContent = `Building on the foundational listening skills discussed in the previous unit, this section shifts focus to the critical link between listening and comprehension. While many students can hear words clearly, true learning occurs only when those words are understood, interpreted, and retained.
In university lectures and academic interactions, listening without comprehension is like collecting water in a basket—it quickly drains away. Comprehension transforms raw information into meaningful knowledge that you can apply, analyse, and recall during examinations or discussions. This unit examines the connection between listening and understanding, explores the process of listening-comprehension, and highlights factors that can either support or hinder effective comprehension.
Mastering this aspect of communication will help you extract maximum value from every lecture, tutorial, and study session.` ;

    document.getElementById("objectiveContent").textContent = `By the end of studying this unit, you should be able to:
Explain the relationship between listening and comprehension in academic settings.
Describe the process of listening-comprehension and its stages.
Identify and discuss key factors that influence listening comprehension.
Recognise personal challenges to comprehension and suggest practical strategies to overcome them.
Apply comprehension techniques to improve retention of lecture content.`;
    
    document.getElementById("mcHeader").textContent = "3.1 Relationship between Listening and Comprehending";
    document.getElementById("mcContent").textContent = `Listening and comprehension are closely interconnected processes that work together to facilitate learning. Listening provides the input—spoken language—while comprehension involves processing that input to construct meaning.
Effective listening creates the conditions for comprehension to occur. When you listen actively (as outlined in the previous unit), you are better positioned to understand the message. Conversely, poor listening habits, such as daydreaming or focusing only on isolated words, severely limit comprehension.
In academic contexts, comprehension goes beyond literal understanding. It includes:
Grasping main ideas and supporting details.
Inferring implied meanings.
Relating new information to prior knowledge.
Evaluating the speaker’s arguments or evidence.
Without solid comprehension, note-taking becomes mechanical, revision ineffective, and exam performance disappointing. Strong listening, therefore, serves as the gateway to deep comprehension and lasting knowledge retention.`
    document.getElementById("mcHeader2").textContent = "Listening-Comprehension";
    document.getElementById("mcContent2").textContent = `Listening-comprehension is the mental process of interpreting and making sense of spoken language in real time. It is a dynamic, multi-stage activity that requires simultaneous cognitive effort.The process typically involves the following stages:Receiving the Message
Sound waves enter the ears, and the brain decodes the words and sentences (this overlaps with basic hearing and attentive listening).
Perceiving Meaning
The listener assigns meaning to words, recognises grammar patterns, and interprets sentence structure.
Interpreting Context
The listener considers the speaker’s tone, emphasis, background knowledge, and situational context to understand intent and implications.
Integrating Information
New ideas are connected to existing knowledge, allowing the listener to build a coherent mental picture.
Evaluating and Responding
The listener assesses the validity, relevance, or importance of the message and may prepare questions or internal responses.
Unlike reading, where you can pause or re-read, listening-comprehension happens in real time with no opportunity to rewind (unless recorded). This makes concentration, vocabulary strength, and predictive skills particularly important for successful comprehension during live lectures.`;


document.getElementById("mcHeader3").textContent = `3.3 Factors Affecting Comprehension`;
document.getElementById("mcContent3").textContent = `Several internal and external factors can enhance or impede listening-comprehension. Understanding these helps you address challenges proactively.
Vocabulary Knowledge
Limited familiarity with technical or academic terms reduces comprehension. Building subject-specific vocabulary is essential.
Background Knowledge
Prior understanding of the topic allows you to predict content and fill in gaps. Lack of familiarity with the subject matter makes comprehension harder.
Concentration Level
Fatigue, stress, distractions, or multitasking divide attention and weaken comprehension.
Speaker-Related Factors
Accent, speed of delivery, clarity of pronunciation, use of complex sentences, or lack of visual aids can affect understanding.
Environmental Factors
Noise in the lecture hall, poor acoustics, uncomfortable seating, or extreme temperatures distract from focused listening.
Language Proficiency
For non-native speakers or those transitioning from pidgin/vernacular, grasping formal academic English may require extra effort.
Interest and Motivation
Engagement with the topic increases attention and comprehension; boredom or perceived irrelevance has the opposite effect.
Note-Taking Strategy
Trying to write everything verbatim overloads working memory and reduces comprehension. Selective, organised note-taking supports it.
By identifying which factors most affect you personally, you can take targeted steps—such as previewing lecture topics, improving vocabulary, or choosing better seating—to strengthen your comprehension.`;

document.getElementById("conclusionContent").textContent = `Listening and comprehension are inseparable partners in the learning process. Active listening opens the door, while effective comprehension allows you to step inside and make the knowledge your own. By understanding how these processes interact, recognising the stages of listening-comprehension, and managing influencing factors, you can significantly improve your ability to learn from spoken academic content. Consistent practice of these principles will lead to clearer understanding, better notes, stronger exam performance, and greater confidence in your studies.
`;

document.getElementById("summaryContent").textContent = `Listening and comprehension are interdependent: good listening enables deep comprehension.
Listening-comprehension is a real-time process involving receiving, perceiving, interpreting, integrating, and evaluating spoken messages.
Factors affecting comprehension include vocabulary, background knowledge, concentration, speaker characteristics, environment, language proficiency, interest, and note-taking approach.
Addressing personal and external challenges improves overall academic understanding and retention.`;

document.getElementById("assignmentContent").textContent = `Explain the relationship between listening and comprehension, using examples from a university lecture to illustrate your points.
Outline the main stages of the listening-comprehension process and briefly describe what happens at each stage.
Identify and discuss any four factors that can negatively affect listening-comprehension for university students.
Reflect on your own listening-comprehension challenges. Choose two factors from this unit that most affect you and propose specific strategies you will adopt to overcome them during this semester.
Submit your responses according to your tutor’s guidelines.`;

document.getElementById("loading").style.opacity = "0";
window.scrollTo(0,0)
}, 2000)
}
