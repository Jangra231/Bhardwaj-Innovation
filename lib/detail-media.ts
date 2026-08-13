const detail = (file: string) => `/media/detail/${file}`;
const carousel = (file: string) => `/media/carousel/${file}`;

export const DETAIL_MEDIA: Record<string, string[]> = {
  "vehicle-tracking": [detail("fleet-daylight.jpg"), carousel("fleet-tracking.jpg"), detail("fleet-control.jpg")],
  "fleet-management": [detail("fleet-control.jpg"), detail("fleet-daylight.jpg"), carousel("fleet-tracking.jpg")],
  "dashcam-solutions": [detail("dashcam-safety.jpg"), carousel("video-safety.jpg"), detail("fleet-daylight.jpg")],
  "personalized-tracking": [detail("personal-tracking.jpg"), carousel("personal-tracking.jpg"), detail("workflow-support.jpg")],
  "custom-software": [detail("software-platform.jpg"), carousel("api-geofence-ai.jpg"), detail("fleet-control.jpg")],
  "government-fleet": [detail("government-transit.jpg"), detail("fleet-control.jpg"), detail("fleet-daylight.jpg")],
  "ev-bms": [detail("ev-bms.jpg"), carousel("ev-iot.jpg"), detail("software-platform.jpg")],
  "reflective-tape": [detail("cargo-security.jpg"), carousel("cargo-security.jpg"), detail("fleet-daylight.jpg")],
  "technical-support": [detail("workflow-support.jpg"), carousel("workflow-operations.jpg"), detail("software-platform.jpg")],
  "installation-deployment": [detail("workflow-support.jpg"), detail("fleet-daylight.jpg"), detail("software-platform.jpg")],
  "after-sales-service": [carousel("workflow-operations.jpg"), detail("workflow-support.jpg"), detail("software-platform.jpg")],
  "basic-magnetic-gps": [detail("fleet-daylight.jpg"), carousel("fleet-tracking.jpg"), detail("fleet-control.jpg")],
  "ais140-gps-hardware": [detail("government-transit.jpg"), detail("fleet-daylight.jpg"), detail("fleet-control.jpg")],
  "video-telematics-solutions": [detail("dashcam-safety.jpg"), carousel("video-safety.jpg"), detail("fleet-control.jpg")],
  "personal-pet-wallet-tracker": [detail("personal-tracking.jpg"), carousel("personal-tracking.jpg"), detail("workflow-support.jpg")],
  "fatigue-sensor-solutions": [carousel("video-safety.jpg"), detail("dashcam-safety.jpg"), detail("fleet-control.jpg")],
  "gps-dash-camera": [detail("dashcam-safety.jpg"), carousel("video-safety.jpg"), detail("fleet-daylight.jpg")],
  "gps-digital-lock-valuable-transport": [detail("cargo-security.jpg"), carousel("cargo-security.jpg"), detail("fleet-daylight.jpg")],
  "iot-hardware-ev-vehicles-batteries": [detail("ev-bms.jpg"), carousel("ev-iot.jpg"), detail("software-platform.jpg")],
  "cctv-dash-cams-security-surveillance": [detail("dashcam-safety.jpg"), carousel("video-safety.jpg"), detail("workflow-support.jpg")],
  "cable-wire-security-seal-logistics": [carousel("cargo-security.jpg"), detail("cargo-security.jpg"), detail("fleet-daylight.jpg")],
  "container-seal-logistics-transportation": [detail("cargo-security.jpg"), carousel("cargo-security.jpg"), detail("workflow-support.jpg")],
  "smart-id-cards": [carousel("personal-tracking.jpg"), detail("personal-tracking.jpg"), detail("workflow-support.jpg")],
  "pet-tracking-gps": [detail("personal-tracking.jpg"), carousel("personal-tracking.jpg"), detail("fleet-daylight.jpg")],
  "fleet-management-dashboard": [detail("fleet-control.jpg"), carousel("software-platform.jpg"), detail("software-platform.jpg")],
  "bizeye-fleet-employee-asset-tracking": [detail("software-platform.jpg"), detail("fleet-control.jpg"), carousel("software-platform.jpg")],
  "spark-iot-ev-battery-health-monitoring": [detail("ev-bms.jpg"), carousel("ev-iot.jpg"), detail("software-platform.jpg")],
  "event-management-application": [detail("workflow-support.jpg"), carousel("workflow-operations.jpg"), detail("software-platform.jpg")],
  "saphal-agri-procurement-handling-logistics": [detail("agri-logistics.jpg"), carousel("agri-logistics.jpg"), detail("workflow-support.jpg")],
  "workflow-tracer-operational-tracing": [carousel("workflow-operations.jpg"), detail("workflow-support.jpg"), detail("software-platform.jpg")],
  "whatsapp-appointment-order-management": [detail("workflow-support.jpg"), carousel("workflow-operations.jpg"), detail("software-platform.jpg")],
  "mobile-tracking-app": [detail("software-platform.jpg"), carousel("software-platform.jpg"), detail("fleet-control.jpg")],
  "enterprise-api-gateway": [carousel("api-geofence-ai.jpg"), detail("software-platform.jpg"), detail("fleet-control.jpg")],
  "smart-geofencing-engine": [carousel("api-geofence-ai.jpg"), detail("fleet-daylight.jpg"), detail("fleet-control.jpg")],
  "driver-behavior-ai": [detail("dashcam-safety.jpg"), carousel("video-safety.jpg"), detail("fleet-control.jpg")],
  "predictive-maintenance-portal": [detail("software-platform.jpg"), detail("ev-bms.jpg"), carousel("api-geofence-ai.jpg")],
};

export const getDetailMedia = (id: string, fallback: string[]) =>
  fallback.length >= 3 ? fallback : DETAIL_MEDIA[id] ?? fallback;
