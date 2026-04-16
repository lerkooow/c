"use server";

export async function submitAttendance(formData: FormData) {
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw4llP80CCsCfcPU-n4J8fSvWJW3aMXRIqen57RzNTSPtHVwVvLMS7t69-xOmcxrPz2Jg/exec";

  try {
    const res = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (data.result === "success") {
      return { success: true };
    } else {
      return { success: false, error: "Ошибка скрипта Google" };
    }
  } catch (error) {
    console.error("Server Action Error:", error);
    return { success: false, error: "Ошибка сервера" };
  }
}
