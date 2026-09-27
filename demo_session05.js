const inputValid = " med-rhm-0815-bhyt ";
const inputInvalid = " abc-mat-1234 ";

function processTicket(rawData) {
  let data = rawData.trim().toUpperCase();

  if (!data.startsWith("MED-")) {
    console.log("Mã phiếu không hợp lệ:", data);
    return;
  }

  let specialty = data.slice(4, 7);
  let parts = data.split("-");
  let orderNumber = parts[2];

  let hasBHYT = data.includes("BHYT");
  let basePrice = 150000;
  let finalPrice = hasBHYT ? basePrice * 0.2 : basePrice;

  let border = "=".repeat(35);
  console.log(border);
  console.log(`PHIẾU TIẾP ĐÓN PHÒNG KHÁM`);
  console.log(border);
  console.log(`Mã phiếu: ${data}`);
  console.log(`Chuyên khoa: ${specialty}`);
  console.log(`Số thứ tự: ${orderNumber}`);
  console.log(`BHYT: ${hasBHYT ? "Có" : "Không"}`);
  console.log(`Giá khám: ${finalPrice.toLocaleString()} VNĐ`);
  console.log(border);
  console.log("\n");
}

processTicket(inputValid);
processTicket(inputInvalid);
