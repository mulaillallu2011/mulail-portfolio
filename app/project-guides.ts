export type ProjectGuide = { features: string[]; components: string[]; connections: string[][]; note: string; code: string | null };
export const projectGuides: Record<string, ProjectGuide> = {
  "01": {
    "features": [
      "Six-wheel rocker-bogie exploration design",
      "Planned SLAM, obstacle avoidance and return navigation",
      "Camera, environmental sensing and LoRa telemetry",
      "Ground-station dashboard development"
    ],
    "components": [
      "Raspberry Pi 4",
      "ESP32",
      "YDLIDAR X2",
      "Pi Camera Module 3",
      "LoRa SX1278",
      "Gas sensors and encoders",
      "Cytron MDD20A",
      "Six-wheel chassis and motors"
    ],
    "connections": [
      [
        "Camera",
        "Raspberry Pi camera interface"
      ],
      [
        "LiDAR",
        "Raspberry Pi — interface to verify"
      ],
      [
        "Motor driver",
        "Controller and motors — pin map pending"
      ],
      [
        "ESP32 / LoRa",
        "Telemetry subsystem — wiring pending"
      ]
    ],
    "note": "Design-level connections only. Final pin assignments and integrated source were not recovered. Features remain in development.",
    "code": null
  },
  "02": {
    "features": [
      "Local Wi-Fi sensor dashboard",
      "Soil and water measurements",
      "River and ice model inputs",
      "DS18B20, LM35 and vibration readings"
    ],
    "components": [
      "ESP32 DevKit V1",
      "Soil moisture and water sensors",
      "River and ice model inputs",
      "DS18B20",
      "LM35",
      "Digital vibration module",
      "Breadboard and wires"
    ],
    "connections": [
      [
        "Soil analog signal",
        "GPIO34"
      ],
      [
        "Water analog signal",
        "GPIO32"
      ],
      [
        "River input",
        "GPIO25"
      ],
      [
        "Ice input",
        "GPIO26"
      ],
      [
        "DS18B20 data",
        "GPIO27"
      ],
      [
        "LM35 output",
        "GPIO35"
      ],
      [
        "Vibration digital output",
        "GPIO33"
      ],
      [
        "Grounds",
        "Common GND"
      ]
    ],
    "note": "Pin map recovered from Final ESP32 Code. The available sketch is truncated, so this is only its pin-map excerpt. Install OneWire and DallasTemperature and calibrate sensors. Verify supply, sensor pinout and 3.3 V input compatibility before wiring. This is an educational model, not an emergency warning system.",
    "code": "// Recovered pin-map excerpt, not a complete sketch.\nconst int SOIL_PIN = 34;\nconst int WATER_PIN = 32;\nconst int RIVER_PIN = 25;\nconst int ICE_PIN = 26;\nconst int DS18B20_PIN = 27;\nconst int LM35_PIN = 35;\nconst int VIBRATION_PIN = 33;\n"
  },
  "03": {
    "features": [
      "Inventory and products",
      "Sales and billing",
      "Workshops, students and classes",
      "Authentication and role-based access planning"
    ],
    "components": [
      "Next.js / React",
      "TypeScript / Tailwind CSS",
      "Supabase",
      "PostgreSQL"
    ],
    "connections": [
      [
        "Frontend",
        "Supabase client"
      ],
      [
        "Authentication",
        "User sessions and access policies"
      ],
      [
        "Inventory and billing",
        "Database tables"
      ]
    ],
    "note": "Architecture summary from the portfolio chats. Complete source and migrations were not recovered. Server secrets must remain outside the frontend.",
    "code": null
  },
  "04": {
    "features": [
      "Eight LEDs with 15 patterns",
      "Manual pattern advance",
      "Automatic changes every five seconds",
      "Debounced buttons"
    ],
    "components": [
      "Arduino UNO",
      "8 LEDs",
      "8 × 220 Ω resistors",
      "2 push buttons",
      "Breadboard and jumper wires",
      "USB cable"
    ],
    "connections": [
      [
        "D2–D9",
        "Each pin → 220 Ω resistor → LED anode"
      ],
      [
        "LED cathodes",
        "GND"
      ],
      [
        "D10",
        "Manual button → GND (INPUT_PULLUP)"
      ],
      [
        "D11",
        "Automatic button → GND (INPUT_PULLUP)"
      ]
    ],
    "note": "Full sketch recovered from Arduino LED Chaser Components (1). Select Arduino UNO, paste into a new sketch, and upload. Disconnect power while wiring. This recovered version has not been hardware-tested in this update.",
    "code": "// =====================================================\n// ARDUINO UNO - 8 LED CHASER\n// 15 MODES + MANUAL / AUTOMATIC CONTROL\n// =====================================================\n\n// ---------------- PIN SETUP ----------------\n\nconst byte LED_COUNT = 8;\n\nconst byte leds[LED_COUNT] = {\n  2, 3, 4, 5, 6, 7, 8, 9\n};\n\nconst byte MANUAL_BUTTON = 10;\nconst byte AUTO_BUTTON   = 11;\n\n// ---------------- SETTINGS ----------------\n\nconst unsigned long AUTO_CHANGE_TIME = 5000;  // 5 seconds\nconst unsigned long BUTTON_DEBOUNCE = 80;\n\n// ---------------- VARIABLES ----------------\n\nbyte currentMode = 1;\n\nbool automaticMode = false;\n\nunsigned long lastAutoChange = 0;\nunsigned long lastManualPress = 0;\nunsigned long lastAutoPress = 0;\n\nbool lastManualState = HIGH;\nbool lastAutoState = HIGH;\n\nint position = 0;\nint direction = 1;\nint stepNumber = 0;\n\nunsigned long lastAnimation = 0;\n\n// =====================================================\n// SETUP\n// =====================================================\n\nvoid setup() {\n\n  // LED pins\n  for (byte i = 0; i < LED_COUNT; i++) {\n    pinMode(leds[i], OUTPUT);\n    digitalWrite(leds[i], LOW);\n  }\n\n  // Buttons\n  pinMode(MANUAL_BUTTON, INPUT_PULLUP);\n  pinMode(AUTO_BUTTON, INPUT_PULLUP);\n\n  allOff();\n\n  resetAnimation();\n}\n\n// =====================================================\n// MAIN LOOP\n// =====================================================\n\nvoid loop() {\n\n  handleButtons();\n\n  // Automatic mode\n  if (automaticMode) {\n\n    if (millis() - lastAutoChange >= AUTO_CHANGE_TIME) {\n\n      lastAutoChange = millis();\n\n      currentMode++;\n\n      if (currentMode > 15) {\n        currentMode = 1;\n      }\n\n      resetAnimation();\n    }\n  }\n\n  runCurrentMode();\n}\n\n// =====================================================\n// BUTTON CONTROL\n// =====================================================\n\nvoid handleButtons() {\n\n  bool manualState = digitalRead(MANUAL_BUTTON);\n  bool autoState = digitalRead(AUTO_BUTTON);\n\n  // ---------------- MANUAL BUTTON ----------------\n\n  // Detect HIGH -> LOW transition\n  if (lastManualState == HIGH &&\n      manualState == LOW &&\n      millis() - lastManualPress > BUTTON_DEBOUNCE) {\n\n    lastManualPress = millis();\n\n    automaticMode = false;\n\n    currentMode++;\n\n    if (currentMode > 15) {\n      currentMode = 1;\n    }\n\n    resetAnimation();\n  }\n\n  // ---------------- AUTO BUTTON ----------------\n\n  if (lastAutoState == HIGH &&\n      autoState == LOW &&\n      millis() - lastAutoPress > BUTTON_DEBOUNCE) {\n\n    lastAutoPress = millis();\n\n    automaticMode = true;\n\n    lastAutoChange = millis();\n\n    resetAnimation();\n  }\n\n  lastManualState = manualState;\n  lastAutoState = autoState;\n}\n\n// =====================================================\n// RESET ANIMATION\n// =====================================================\n\nvoid resetAnimation() {\n\n  allOff();\n\n  position = 0;\n  direction = 1;\n  stepNumber = 0;\n\n  lastAnimation = millis();\n}\n\n// =====================================================\n// TURN ALL LEDS OFF\n// =====================================================\n\nvoid allOff() {\n\n  for (byte i = 0; i < LED_COUNT; i++) {\n    digitalWrite(leds[i], LOW);\n  }\n}\n\n// =====================================================\n// TURN ALL LEDS ON\n// =====================================================\n\nvoid allOn() {\n\n  for (byte i = 0; i < LED_COUNT; i++) {\n    digitalWrite(leds[i], HIGH);\n  }\n}\n\n// =====================================================\n// RUN CURRENT MODE\n// =====================================================\n\nvoid runCurrentMode() {\n\n  switch (currentMode) {\n\n    case 1:\n      mode1Forward();\n      break;\n\n    case 2:\n      mode2Reverse();\n      break;\n\n    case 3:\n      mode3Bounce();\n      break;\n\n    case 4:\n      mode4CenterOut();\n      break;\n\n    case 5:\n      mode5Alternating();\n      break;\n\n    case 6:\n      mode6AllBlink();\n      break;\n\n    case 7:\n      mode7Fill();\n      break;\n\n    case 8:\n      mode8Empty();\n      break;\n\n    case 9:\n      mode9CenterBlink();\n      break;\n\n    case 10:\n      mode10TwoLEDChase();\n      break;\n\n    case 11:\n      mode11Expanding();\n      break;\n\n    case 12:\n      mode12DoubleBounce();\n      break;\n\n    case 13:\n      mode13OddEven();\n      break;\n\n    case 14:\n      mode14FillClear();\n      break;\n\n    case 15:\n      mode15FastFlash();\n      break;\n  }\n}\n\n// =====================================================\n// MODE 1 - FORWARD\n// =====================================================\n\nvoid mode1Forward() {\n\n  if (millis() - lastAnimation < 100) {\n    return;\n  }\n\n  lastAnimation = millis();\n\n  allOff();\n\n  digitalWrite(leds[position], HIGH);\n\n  position++;\n\n  if (position >= LED_COUNT) {\n    position = 0;\n  }\n}\n\n// =====================================================\n// MODE 2 - REVERSE\n// =====================================================\n\nvoid mode2Reverse() {\n\n  if (millis() - lastAnimation < 100) {\n    return;\n  }\n\n  lastAnimation = millis();\n\n  allOff();\n\n  digitalWrite(leds[position], HIGH);\n\n  position--;\n\n  if (position < 0) {\n    position = LED_COUNT - 1;\n  }\n}\n\n// =====================================================\n// MODE 3 - BOUNCE\n// =====================================================\n\nvoid mode3Bounce() {\n\n  if (millis() - lastAnimation < 100) {\n    return;\n  }\n\n  lastAnimation = millis();\n\n  allOff();\n\n  digitalWrite(leds[position], HIGH);\n\n  position += direction;\n\n  if (position >= LED_COUNT - 1) {\n    position = LED_COUNT - 1;\n    direction = -1;\n  }\n\n  if (position <= 0) {\n    position = 0;\n    direction = 1;\n  }\n}\n\n// =====================================================\n// MODE 4 - CENTER OUT\n// =====================================================\n\nvoid mode4CenterOut() {\n\n  if (millis() - lastAnimation < 180) {\n    return;\n  }\n\n  lastAnimation = millis();\n\n  allOff();\n\n  int left = 3 - position;\n  int right = 4 + position;\n\n  if (left >= 0) {\n    digitalWrite(leds[left], HIGH);\n  }\n\n  if (right < LED_COUNT) {\n    digitalWrite(leds[right], HIGH);\n  }\n\n  position++;\n\n  if (position > 3) {\n    position = 0;\n  }\n}\n\n// =====================================================\n// MODE 5 - ALTERNATING\n// =====================================================\n\nvoid mode5Alternating() {\n\n  if (millis() - lastAnimation < 250) {\n    return;\n  }\n\n  lastAnimation = millis();\n\n  allOff();\n\n  if (stepNumber % 2 == 0) {\n\n    for (byte i = 0; i < LED_COUNT; i += 2) {\n      digitalWrite(leds[i], HIGH);\n    }\n\n  } else {\n\n    for (byte i = 1; i < LED_COUNT; i += 2) {\n      digitalWrite(leds[i], HIGH);\n    }\n  }\n\n  stepNumber++;\n}\n\n// =====================================================\n// MODE 6 - ALL BLINK\n// =====================================================\n\nvoid mode6AllBlink() {\n\n  if (millis() - lastAnimation < 300) {\n    return;\n  }\n\n  lastAnimation = millis();\n\n  if (stepNumber % 2 == 0) {\n    allOn();\n  } else {\n    allOff();\n  }\n\n  stepNumber++;\n}\n\n// =====================================================\n// MODE 7 - FILL\n// =====================================================\n\nvoid mode7Fill() {\n\n  if (millis() - lastAnimation < 180) {\n    return;\n  }\n\n  lastAnimation = millis();\n\n  allOff();\n\n  for (int i = 0; i <= position; i++) {\n    digitalWrite(leds[i], HIGH);\n  }\n\n  position++;\n\n  if (position >= LED_COUNT) {\n    position = 0;\n  }\n}\n\n// =====================================================\n// MODE 8 - EMPTY\n// =====================================================\n\nvoid mode8Empty() {\n\n  if (millis() - lastAnimation < 180) {\n    return;\n  }\n\n  lastAnimation = millis();\n\n  if (position == 0) {\n    allOn();\n  }\n\n  if (position < LED_COUNT) {\n    digitalWrite(leds[position], LOW);\n  }\n\n  position++;\n\n  if (position >= LED_COUNT) {\n    position = 0;\n  }\n}\n\n// =====================================================\n// MODE 9 - CENTER BLINK\n// =====================================================\n\nvoid mode9CenterBlink() {\n\n  if (millis() - lastAnimation < 250) {\n    return;\n  }\n\n  lastAnimation = millis();\n\n  allOff();\n\n  if (stepNumber % 2 == 0) {\n\n    digitalWrite(leds[3], HIGH);\n    digitalWrite(leds[4], HIGH);\n\n  } else {\n\n    digitalWrite(leds[2], HIGH);\n    digitalWrite(leds[5], HIGH);\n  }\n\n  stepNumber++;\n}\n\n// =====================================================\n// MODE 10 - TWO LED CHASE\n// =====================================================\n\nvoid mode10TwoLEDChase() {\n\n  if (millis() - lastAnimation < 120) {\n    return;\n  }\n\n  lastAnimation = millis();\n\n  allOff();\n\n  digitalWrite(leds[position], HIGH);\n\n  int second = position - 1;\n\n  if (second < 0) {\n    second = LED_COUNT - 1;\n  }\n\n  digitalWrite(leds[second], HIGH);\n\n  position++;\n\n  if (position >= LED_COUNT) {\n    position = 0;\n  }\n}\n\n// =====================================================\n// MODE 11 - EXPANDING\n// =====================================================\n\nvoid mode11Expanding() {\n\n  if (millis() - lastAnimation < 200) {\n    return;\n  }\n\n  lastAnimation = millis();\n\n  allOff();\n\n  int centerLeft = 3;\n  int centerRight = 4;\n\n  for (int i = 0; i <= position; i++) {\n\n    int left = centerLeft - i;\n    int right = centerRight + i;\n\n    if (left >= 0) {\n      digitalWrite(leds[left], HIGH);\n    }\n\n    if (right < LED_COUNT) {\n      digitalWrite(leds[right], HIGH);\n    }\n  }\n\n  position++;\n\n  if (position > 3) {\n    position = 0;\n  }\n}\n\n// =====================================================\n// MODE 12 - DOUBLE BOUNCE\n// =====================================================\n\nvoid mode12DoubleBounce() {\n\n  if (millis() - lastAnimation < 100) {\n    return;\n  }\n\n  lastAnimation = millis();\n\n  allOff();\n\n  digitalWrite(leds[position], HIGH);\n\n  int opposite = LED_COUNT - 1 - position;\n\n  digitalWrite(leds[opposite], HIGH);\n\n  position += direction;\n\n  if (position >= LED_COUNT) {\n\n    position = LED_COUNT - 1;\n    direction = -1;\n  }\n\n  if (position < 0) {\n\n    position = 0;\n    direction = 1;\n  }\n}\n\n// =====================================================\n// MODE 13 - ODD / EVEN\n// =====================================================\n\nvoid mode13OddEven() {\n\n  if (millis() - lastAnimation < 400) {\n    return;\n  }\n\n  lastAnimation = millis();\n\n  allOff();\n\n  if (stepNumber % 2 == 0) {\n\n    digitalWrite(leds[0], HIGH);\n    digitalWrite(leds[2], HIGH);\n    digitalWrite(leds[4], HIGH);\n    digitalWrite(leds[6], HIGH);\n\n  } else {\n\n    digitalWrite(leds[1], HIGH);\n    digitalWrite(leds[3], HIGH);\n    digitalWrite(leds[5], HIGH);\n    digitalWrite(leds[7], HIGH);\n  }\n\n  stepNumber++;\n}\n\n// =====================================================\n// MODE 14 - FILL AND CLEAR\n// =====================================================\n\nvoid mode14FillClear() {\n\n  if (millis() - lastAnimation < 180) {\n    return;\n  }\n\n  lastAnimation = millis();\n\n  if (stepNumber < LED_COUNT) {\n\n    digitalWrite(leds[stepNumber], HIGH);\n\n  } else if (stepNumber < LED_COUNT * 2) {\n\n    digitalWrite(\n      leds[stepNumber - LED_COUNT],\n      LOW\n    );\n\n  } else {\n\n    stepNumber = -1;\n  }\n\n  stepNumber++;\n}\n\n// =====================================================\n// MODE 15 - FAST FLASH\n// =====================================================\n\nvoid mode15FastFlash() {\n\n  if (millis() - lastAnimation < 100) {\n    return;\n  }\n\n  lastAnimation = millis();\n\n  if (stepNumber % 2 == 0) {\n    allOn();\n  } else {\n    allOff();\n  }\n\n  stepNumber++;\n}\n"
  },
  "05": {
    "features": [
      "Idle eyes animation",
      "Typed hey buddy wake interaction",
      "Listening, thinking and reply screens",
      "Ten-second inactivity timeout"
    ],
    "components": [
      "ESP32-family simulation board with GPIO8/9/10 available",
      "128×64 SSD1306 OLED",
      "Wake button",
      "Wokwi",
      "Adafruit GFX and SSD1306 libraries"
    ],
    "connections": [
      [
        "OLED SDA",
        "GPIO8"
      ],
      [
        "OLED SCL",
        "GPIO9"
      ],
      [
        "OLED VCC / GND",
        "3V3 / GND"
      ],
      [
        "Wake button",
        "GPIO10 → button → GND"
      ],
      [
        "Serial Monitor",
        "115200 baud: type hey buddy, then hello"
      ]
    ],
    "note": "Recovered Wokwi simulation wiring and sketch. Verify the exact board: GPIO8/9/10 are not suitable on every ESP32 variant. This version uses typed serial input or a button, not microphone speech recognition.",
    "code": "#include <Arduino.h>\n#include <Wire.h>\n#include <Adafruit_GFX.h>\n#include <Adafruit_SSD1306.h>\n\n#define SDA_PIN 8\n#define SCL_PIN 9\n#define WAKE_PIN 10\n\nAdafruit_SSD1306 oled(128, 64, &Wire, -1);\n\nenum BuddyState {\n  IDLE,\n  LISTENING,\n  THINKING,\n  REPLYING\n};\n\nBuddyState state = IDLE;\n\nbool oledReady = false;\nbool prevWake = HIGH;\n\nString serialInput = \"\";\nString replyText = \"\";\n\nunsigned long stateStarted = 0;\nunsigned long lastFrame = 0;\nunsigned long lastBlink = 0;\nbool blinkNow = false;\n\nbool waitingForCommand = false;   // after \"hey buddy\"\nconst unsigned long listeningTimeout = 10000; // 10 sec\n\nvoid setState(BuddyState newState) {\n  state = newState;\n  stateStarted = millis();\n}\n\nvoid centerText(const String &text, int y, int size = 1) {\n  oled.setTextSize(size);\n  int16_t x1, y1;\n  uint16_t w, h;\n  oled.getTextBounds(text, 0, y, &x1, &y1, &w, &h);\n  int x = (128 - w) / 2;\n  oled.setCursor(x, y);\n  oled.print(text);\n}\n\nvoid drawEyesIdle() {\n  // blinking logic\n  if (millis() - lastBlink > 2500) {\n    blinkNow = true;\n    lastBlink = millis();\n  }\n  if (blinkNow && millis() - lastBlink > 180) {\n    blinkNow = false;\n  }\n\n  if (!blinkNow) {\n    oled.fillRoundRect(24, 22, 22, 16, 6, SSD1306_WHITE);\n    oled.fillRoundRect(82, 22, 22, 16, 6, SSD1306_WHITE);\n\n    // pupils\n    oled.fillCircle(35, 30, 3, SSD1306_BLACK);\n    oled.fillCircle(93, 30, 3, SSD1306_BLACK);\n  } else {\n    oled.drawLine(24, 30, 46, 30, SSD1306_WHITE);\n    oled.drawLine(82, 30, 104, 30, SSD1306_WHITE);\n  }\n\n  // smile\n  oled.drawLine(57, 45, 64, 49, SSD1306_WHITE);\n  oled.drawLine(64, 49, 71, 45, SSD1306_WHITE);\n}\n\nvoid drawListeningWave() {\n  for (int i = 0; i < 9; i++) {\n    int x = 18 + i * 10;\n    int phase = (millis() / 120 + i * 3) % 12;\n    int h = 6 + phase;\n    oled.fillRoundRect(x, 34 - h / 2, 5, h, 2, SSD1306_WHITE);\n  }\n}\n\nvoid drawThinkingDots() {\n  centerText(\"PROCESSING\", 18, 1);\n  int dots = (millis() / 300) % 4;\n  String s = \"\";\n  for (int i = 0; i < dots; i++) s += \".\";\n  centerText(s, 35, 2);\n}\n\nvoid wrapText(String text, int startY) {\n  oled.setTextSize(1);\n  oled.setTextColor(SSD1306_WHITE);\n\n  int maxChars = 18;\n  int y = startY;\n\n  while (text.length() > 0 && y <= 52) {\n    int lineLen = min(maxChars, (int)text.length());\n\n    if (text.length() > maxChars) {\n      int lastSpace = -1;\n      for (int i = 0; i < lineLen; i++) {\n        if (text[i] == ' ') lastSpace = i;\n      }\n      if (lastSpace > 0) lineLen = lastSpace;\n    }\n\n    String line = text.substring(0, lineLen);\n    text.remove(0, lineLen);\n    text.trim();\n\n    oled.setCursor(6, y);\n    oled.print(line);\n    y += 10;\n  }\n}\n\nString makeReply(String msg) {\n  String lower = msg;\n  lower.toLowerCase();\n\n  if (lower.indexOf(\"hello\") >= 0 || lower == \"hi\") {\n    return \"Hello! How can I help?\";\n  } \n  else if (lower.indexOf(\"how are you\") >= 0) {\n    return \"I am doing great!\";\n  } \n  else if (lower.indexOf(\"who are you\") >= 0 || lower.indexOf(\"your name\") >= 0) {\n    return \"I am Buddy, your desk companion.\";\n  } \n  else if (lower.indexOf(\"coding\") >= 0) {\n    return \"Coding mode selected.\";\n  } \n  else if (lower.indexOf(\"gaming\") >= 0) {\n    return \"Gaming mode selected.\";\n  } \n  else if (lower.indexOf(\"study\") >= 0) {\n    return \"Study mode selected.\";\n  } \n  else if (lower.indexOf(\"movie\") >= 0) {\n    return \"Movie mode selected.\";\n  } \n  else if (lower.indexOf(\"thank\") >= 0) {\n    return \"You're welcome!\";\n  } \n  else if (lower.indexOf(\"open vscode\") >= 0) {\n    return \"VS Code needs laptop bridge.\";\n  } \n  else if (lower.indexOf(\"open chrome\") >= 0) {\n    return \"Chrome needs laptop bridge.\";\n  } \n  else {\n    return \"I heard: \" + msg;\n  }\n}\n\nvoid drawReplyScreen() {\n  oled.setTextSize(1);\n  oled.setCursor(6, 4);\n  oled.print(\"BUDDY SAYS\");\n  oled.drawFastHLine(5, 14, 118, SSD1306_WHITE);\n  wrapText(replyText, 20);\n}\n\nvoid updateOLED() {\n  if (!oledReady) return;\n\n  oled.clearDisplay();\n  oled.drawRoundRect(0, 0, 128, 64, 6, SSD1306_WHITE);\n  oled.setTextColor(SSD1306_WHITE);\n\n  if (state == IDLE) {\n    oled.setTextSize(1);\n    centerText(\"BUDDY V1\", 5);\n    drawEyesIdle();\n    centerText(\"Say: HEY BUDDY\", 54);\n  }\n  else if (state == LISTENING) {\n    centerText(\"LISTENING\", 10);\n    drawListeningWave();\n    centerText(\"Now tell me...\", 52);\n  }\n  else if (state == THINKING) {\n    drawThinkingDots();\n  }\n  else if (state == REPLYING) {\n    drawReplyScreen();\n  }\n\n  oled.display();\n}\n\nvoid processMessage(String msg) {\n  msg.trim();\n  if (msg.length() == 0) return;\n\n  Serial.print(\"YOU: \");\n  Serial.println(msg);\n\n  String lower = msg;\n  lower.toLowerCase();\n\n  // Wake phrase\n  if (!waitingForCommand) {\n    if (lower == \"hey buddy\") {\n      waitingForCommand = true;\n      setState(LISTENING);\n      Serial.println(\"BUDDY: Listening...\");\n      return;\n    } else {\n      Serial.println(\"BUDDY: Say 'hey buddy' first.\");\n      return;\n    }\n  }\n\n  // If already listening, this becomes the actual command\n  replyText = makeReply(msg);\n  Serial.print(\"BUDDY: \");\n  Serial.println(replyText);\n\n  waitingForCommand = false;\n  setState(THINKING);\n}\n\nvoid readSerialInput() {\n  while (Serial.available() > 0) {\n    char c = (char)Serial.read();\n\n    if (c == '\\n' || c == '\\r') {\n      if (serialInput.length() > 0) {\n        processMessage(serialInput);\n        serialInput = \"\";\n      }\n    } else if ((uint8_t)c >= 32) {\n      if (serialInput.length() < 180) {\n        serialInput += c;\n      }\n    }\n  }\n}\n\nvoid setup() {\n  Serial.begin(115200);\n  pinMode(WAKE_PIN, INPUT_PULLUP);\n  prevWake = digitalRead(WAKE_PIN);\n\n  Wire.begin(SDA_PIN, SCL_PIN);\n  oledReady = oled.begin(SSD1306_SWITCHCAPVCC, 0x3C);\n\n  Serial.println();\n  Serial.println(\"======================\");\n  Serial.println(\" BUDDY V1 STARTED\");\n  Serial.println(\"======================\");\n  Serial.println(\"Type: hey buddy\");\n  Serial.println(\"Then type your command.\");\n  Serial.println();\n\n  setState(IDLE);\n}\n\nvoid loop() {\n  readSerialInput();\n\n  // physical wake button acts like \"hey buddy\"\n  bool wakeNow = digitalRead(WAKE_PIN);\n  if (prevWake == HIGH && wakeNow == LOW) {\n    waitingForCommand = true;\n    setState(LISTENING);\n    Serial.println(\"BUDDY: Listening...\");\n  }\n  prevWake = wakeNow;\n\n  unsigned long elapsed = millis() - stateStarted;\n\n  if (state == LISTENING && elapsed > listeningTimeout) {\n    waitingForCommand = false;\n    setState(IDLE);\n    Serial.println(\"BUDDY: No input. Going idle.\");\n  }\n\n  if (state == THINKING && elapsed > 900) {\n    setState(REPLYING);\n  }\n\n  if (state == REPLYING && elapsed > 6000) {\n    setState(IDLE);\n  }\n\n  if (millis() - lastFrame > 80) {\n    lastFrame = millis();\n    updateOLED();\n  }\n\n  delay(5);\n}\n"
  },
  "06": {
    "features": [
      "Sales, purchases and inventory",
      "Customer and supplier records",
      "Receivables and payables",
      "Accounting report interfaces"
    ],
    "components": [
      "React",
      "JavaScript",
      "CSS",
      "Browser local storage"
    ],
    "connections": [
      [
        "React screens",
        "Shared application navigation"
      ],
      [
        "Records",
        "Browser localStorage"
      ],
      [
        "Dashboard totals",
        "Saved invoices and bills"
      ]
    ],
    "note": "The accounting chat contains a partial application file, not the complete modules. The excerpt below illustrates its storage approach; it is not a finished accounting application.",
    "code": "// Illustrative storage excerpt, not a complete application.\nfunction readInvoices() {\n  try {\n    return JSON.parse(localStorage.getItem('bizledger_sales_invoices') || '[]');\n  } catch {\n    return [];\n  }\n}\n"
  },
  "07": {
    "features": [
      "Music-player interface",
      "YouTube API integration work",
      "CSS and layout refinement"
    ],
    "components": [
      "Web frontend",
      "CSS",
      "YouTube Data API"
    ],
    "connections": [
      [
        "Player UI",
        "Supported YouTube integration"
      ],
      [
        "API configuration",
        "Application-restricted key"
      ]
    ],
    "note": "Retrieved chats confirm interface and API setup work. Complete source was not recovered. Never publish unrestricted API credentials.",
    "code": null
  }
};

