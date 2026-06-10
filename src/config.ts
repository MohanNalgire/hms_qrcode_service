export const SERVICE_NAME = 'qrcode-service';
export const DATABASE_NAME = 'hms_qrcode';
export const PORT = Number(process.env.PORT ?? process.env.QRCODE_PORT ?? 3009);
export const ROUTE_BASE = process.env.QR_CODE_ROUTE_BASE ?? '/api/v1/qrcode';