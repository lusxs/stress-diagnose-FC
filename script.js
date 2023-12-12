function diagnose() {
  // Mendapatkan gejala yang dipilih
  const symptoms = document.querySelectorAll('input[name="symptom"]:checked');
  const selectedSymptoms = Array.from(symptoms).map((symptom) => symptom.value);

  // Melakukan Forward Chaining
  let diagnosisResult = "";

  if (
    selectedSymptoms.includes("G07") ||
    selectedSymptoms.includes("G08") ||
    selectedSymptoms.includes("G09")
  ) {
    diagnosisResult = "Stres Berat";
  } else if (
    selectedSymptoms.filter((symptom) =>
      ["G03", "G05", "G11", "G17", "G18", "G19", "G20"].includes(symptom)
    ).length >= 2
  ) {
    diagnosisResult = "Stres Sedang";
  } else if (
    selectedSymptoms.filter((symptom) =>
      ["G01", "G02", "G06", "G12", "G13", "G14", "G16"].includes(symptom)
    ).length >= 1
  ) {
    diagnosisResult = "Stres Ringan";
  } else if (
    selectedSymptoms.includes("G04") &&
    selectedSymptoms.includes("G10")
  ) {
    diagnosisResult = "Gangguan Mood";
  } else if (
    !selectedSymptoms.length ||
    selectedSymptoms.includes("G04") ||
    selectedSymptoms.includes("G10")
  ) {
    diagnosisResult = "Gangguan Mood";
  }

  // Menampilkan hasil diagnosa
  const resultElement = document.getElementById("result");
  resultElement.textContent = `Hasil Diagnosa: ${diagnosisResult}`;
}
