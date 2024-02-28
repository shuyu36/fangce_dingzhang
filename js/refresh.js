 document.addEventListener("DOMContentLoaded", function () {
    const tabContents = document.querySelectorAll(".tab-pane");
  
    // 檢查 URL 中的 query string
    const urlParams = new URLSearchParams(window.location.search);
    const tabParam = urlParams.get("data-tab");
  
    if (tabParam) {
      // 如果有 data-tab 參數，則顯示相應的內容
      const targetContent = document.getElementById(tabParam);
      if (targetContent) {
        // 隱藏所有的內容
        tabContents.forEach((content) => {
          content.style.display = "none";
        });
  
        // 顯示點擊的選項對應的內容
        targetContent.style.display = "block";
        console.log(tabParam + " 內容顯示");
      }
    }
  });
  
  