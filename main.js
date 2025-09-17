function CheckGrade() {
    let score = parseInt(document.getElementById("scoreinput").value);
    let grade;
    if (score >= 70 && score <= 100) {
        grade = "A (First class)";
    }
     else if (score >= 60 && score < 70) {
        grade = "B+ (Second Class Upper)";
    }
     else if (score >= 50 && score < 60) {
        grade = "C (Second class Lower)";
    }
     else if (score >= 40 && score < 50) {
        grade = "D (Pass, Situp)";
    }
    else if (score <40 && score >=0)
    grade = "F (Fail, You're not serious)" ;
    else {
        grade = "Invalid score. Please enter a valid score.";
    }
    document.getElementById("result").innerText = `Grade: ${grade}`;
}