(function () {
  const btnCheck = document.getElementById("id-aux-close-modal");
  console.log(btnCheck);
  if (btnCheck) {
    btnCheck.addEventListener("click", () => {
      closeModal();
    });
  }
  function closeModal() {
    const modal2 = document.getElementById("id-aux-modal");
    const modal = document.getElementById("id-aux-modal-overlay");
    if (modal) {
      modal.style.display = "none";
    }
    if (modal2) {
      modal2.style.display = "none";
    }
  }
  function logTreatmentInteractions() {
    console.log("call treatment");
    alert("Call Treatment");
  }
  const imgLog = document.getElementById("id-aux-modal-img");
  if (imgLog) {
    imgLog.addEventListener("click", () => {
      logTreatmentInteractions();
    });
  }
  console.log("sample.js loaded");
})();