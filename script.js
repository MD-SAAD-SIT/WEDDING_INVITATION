function showcard() {
  let name = document.getElementById("name").value;
  if (name === "") {
    alert("Please enter the name");
    return;
  }

  // Open a new tab and write the loading animation HTML content
  const newTab = window.open("", "_blank");

  const loadingContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Loading...</title>
            <style>
                body {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-height: 100vh;
                    margin: 0;
                    background-color: #f8f9fa;
                    font-family: Arial, sans-serif;
                    color: #343a40;
                }
                .loading {
                    border: 16px solid #f3f3f3;
                    border-top: 16px solid #3498db;
                    border-radius: 50%;
                    width: 120px;
                    height: 120px;
                    animation: spin 2s linear infinite;
                }
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }

                /* Responsive Styles */
                @media (max-width: 768px) {
                    .loading {
                        width: 80px;
                        height: 80px;
                        border-width: 12px;
                    }
                }

                @media (max-width: 480px) {
                    .loading {
                        width: 60px;
                        height: 60px;
                        border-width: 8px;
                    }
                }
            </style>
        </head>
        <body>
            <div class="loading"></div>
        </body>
        </html>
    `;

  newTab.document.open();
  newTab.document.write(loadingContent);
  newTab.document.close(); // Close the document to finish writing

  // Set a timeout to display the actual content after 3 seconds (3000 milliseconds)
  setTimeout(() => {
    const htmlContent = `
          <!DOCTYPE html>
          <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Wedding Invitation</title>
              <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&family=Playfair+Display:wght@500&family=Great+Vibes&family=Marcellus&display=swap" rel="stylesheet">
              <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>
              <style>
                  body {
                      background: url('https://images.unsplash.com/photo-1528747008803-f9f5cc0a9f4d') no-repeat center center fixed;
                      background-size: cover;
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      min-height: 100vh;
                      margin: 0;
                      padding: 20px;
                      font-family: 'Playfair Display', serif;
                  }

                  .invitation {
                      width: 90%;
                      max-width: 600px;
                      padding: 40px;
                      background: rgba(255, 255, 255, 0.95);
                      text-align: center;
                      border: 10px solid #d4af37;
                      border-radius: 15px;
                      box-shadow: 10px 10px 25px rgba(0, 0, 0, 0.3);
                      position: relative;
                      overflow: visible;
                  }

                  .invitation::before,
                  .invitation::after {
                      content: '';
                      position: absolute;
                      width: 150px;
                      height: 150px;
                      background: rgba(212, 175, 55, 0.1);
                      border-radius: 50%;
                      z-index: -1;
                  }

                  .invitation::before {
                      top: -75px;
                      left: -75px;
                  }

                  .invitation::after {
                      bottom: -75px;
                      right: -75px;
                  }

                  h1,
                  h2 {
                      color: #c0392b;
                      font-family: 'Dancing Script', cursive;
                      margin: 20px 0;
                  }

                  h1 {
                      font-size: 48px;
                      font-weight: bold;
                      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
                  }

                  h2 {
                      font-size: 36px;
                  }

                  .arabic {
                      font-size: 28px;
                      color: #8b5e3c;
                      font-family: 'Traditional Arabic', serif;
                      margin: 0;
                  }

                  p {
                      font-size: 20px;
                      color: #333;
                      margin: 15px 0;
                      line-height: 1.6;
                  }

                  .message {
                      font-size: 22px;
                      color: #704214;
                      font-style: italic;
                      margin-bottom: 25px;
                      font-family: 'Marcellus', serif;
                  }

                  .venue {
                      font-weight: bold;
                      color: #8b5e3c;
                      font-family: 'Great Vibes', cursive;
                      font-size: 24px;
                  }

                  .footer {
                      font-style: italic;
                      font-size: 18px;
                      color: #555;
                      margin-top: 25px;
                      font-family: 'Marcellus', serif;
                  }

                  .separator {
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      margin: 0;
                  }

                  .separator::before,
                  .separator::after {
                      content: '';
                      flex: 1;
                      border-bottom: 2px solid #d4af37;
                      margin: 0 15px;
                  }

                  .separator span {
                      font-size: 28px;
                      color: #c0392b;
                      font-family: 'Dancing Script', cursive;
                  }

                  .print-button {
                      margin-top: 30px;
                      padding: 10px 20px;
                      font-size: 18px;
                      font-family: 'Playfair Display', serif;
                      background-color: #d4af37;
                      color: white;
                      border: none;
                      border-radius: 5px;
                      cursor: pointer;
                      transition: background-color 0.3s ease;
                  }

                  .print-button:hover {
                      background-color: #c39a2e;
                  }

                  @media (max-width: 768px) {
                      h1 {
                          font-size: 42px;
                      }

                      h2 {
                          font-size: 32px;
                      }

                      .arabic {
                          font-size: 24px;
                      }

                      p {
                          font-size: 18px;
                      }

                      .venue {
                          font-size: 22px;
                      }

                      .message {
                          font-size: 20px;
                      }

                      .footer {
                          font-size: 16px;
                      }
                  }

                  @media (max-width: 480px) {
                      .invitation {
                          padding: 30px;
                          border-width: 8px;
                      }

                      h1 {
                          font-size: 36px;
                      }

                      h2 {
                          font-size: 28px;
                      }

                      .arabic {
                          font-size: 22px;
                      }

                      p {
                          font-size: 16px;
                      }

                      .venue {
                          font-size: 20px;
                      }

                      .message {
                          font-size: 18px;
                      }

                      .footer {
                          font-size: 14px;
                      }
                  }
              </style>
          </head>
          <body>
              <div class="invitation">
                  <h2 class="arabic">بِسْمِ ٱللَّٰهِ الرَّحْمَٰنِ الرَّحِيمِ</h2>
                  <p>In the Name of Allah, the Most Beneficent, the Most Merciful</p>
                  <p>May this marriage be blessed with love, joy, and togetherness. Ameen</p>
                  <p class="message">Dear ${name}, we warmly invite you to celebrate the joyous occasion of the wedding of our beloved daughter.</p>
                  <div class="separator">
                      <span>❤️</span>
                  </div>
                  <h1>Nimra Shamshiya</h1>
                  <p>Daughter of Mr. Mahaboob Khan & Mrs. Shahataj Unnisa</p>
                  <div class="separator">
                      <span>❤️</span>
                  </div>
                  <h1>Mohammed Nasruddin</h1>
                  <p>Son of Late Mr. Nazimuddin & Mrs. Zaheda</p>
                  <div class="separator">
                      <span>❤️</span>
                  </div>
                  <p><strong>Insha Allah Nikah on</strong> Sunday, 4th November 2025 [12:00 PM]</p>
                  <p><strong>Lunch:</strong> After Nikah</p>
                  <p class="venue"><strong>Venue:</strong> Essra Wedding Hall</p>
                  <p>Near Yaseen Masjid, Sadashivanagar, Tumkur</p>
                  <p class="footer">"A delightful feast of both vegetarian and non-vegetarian delicacies has been arranged for our esteemed guests."</p>
                  <button class="print-button" onclick="downloadPDF()">Download PDF</button>
              </div>
              <script>
    function downloadPDF() {
        const element = document.querySelector(".invitation");
        const button = document.querySelector(".print-button");
        button.style.display = "none"; // Hide the button temporarily

        html2pdf()
            .set({
                margin: [1, 5, 0, 5],
                filename: 'Wedding_Invitation.pdf', // Set the filename here
                image: { type: 'jpeg', quality: 1 },
                html2canvas: { scale: 2, useCORS: true, scrollX: 0, scrollY: 0 },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
            })
            .from(element)
            .toCanvas()
            .toPdf()
            .get('pdf')
            .then(pdf => {
                const pageWidth = pdf.internal.pageSize.getWidth();
                const pageHeight = pdf.internal.pageSize.getHeight();
                pdf.internal.scaleFactor = Math.min(1, (pageWidth - 10) / element.clientWidth);
                pdf.save('Wedding_Invitation.pdf'); // Explicitly save with the correct filename
            })
            .then(() => {
                button.style.display = "inline"; // Show the button again
            });
    }
</script>

          </body>
          </html>
      `;

    newTab.document.open();
    newTab.document.write(htmlContent);
    newTab.document.close(); // Close the document to finish writing
  }, 3000); // 3-second delay
}
