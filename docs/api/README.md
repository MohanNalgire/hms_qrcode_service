# HMS QR Code Service API Documentation

API collection for QR code generation and management.

## Service Endpoints

| Resource | Base Path |
|----------|-----------|
| QR Code | `/api/v1/qrcode` |

## Quick Start

1. Import `hms-qrcode-service.yaml` into your REST client
2. Set the `host` variable to your service URL (e.g., `http://localhost:3009`)

## Resources

- `POST /api/v1/qrcode/generate` - Generate or update QR code
- `GET /api/v1/qrcode` - List all QR codes
- `GET /api/v1/qrcode/{id}` - Get QR code by ID
- `GET /api/v1/qrcode/entity/{entityType}/{entityId}` - Get QR code by entity
- `PUT /api/v1/qrcode/{id}/image` - Update QR code image
- `DELETE /api/v1/qrcode/{id}` - Delete QR code