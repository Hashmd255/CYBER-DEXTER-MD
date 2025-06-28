const fs = require("fs");
require("dotenv").config();

const parseBoolean = (value, defaultValue) => {
  if (value === undefined) return defaultValue;
  return value.toLowerCase() === "true";
};

const config = {
  // Session Configuration
  SESSION_ID: process.env.SESSION_ID || "H4sIAAAAAAAAA5VU2ZKiSBT9l3zFaGURhIiKGMAFRFxwQZ3ohxQSSGUzM8HCDv+9A6uqqx9memp4SnK599x7zrk/QF5gihzUAO0HKAmuIUPtkjUlAhowqihCBHRACBkEGmichWCezxnlYT/vifvjIXLuSZEuqtqlIrOgQFzsKK6Rj17AowPK6pTi4A8BLVfcp1lcTISpHMZ7rJe4zpX+6bJzg0UeHLswX1X+Tk59+wU82ogQE5zHozJBGSIwdVCzhJh8Db4wWcvYL8fj11FciV7pUztF2b2vZs7ocKzQtihn3sWpuGz7NfgNK8VmXM2n1z2rV2O+G65umG0K+e4r4tkU72yabuquOMSHN/gUxzkK7RDlDLPmy33XrcH5HNThxeRWqe/KbkltoZ/I+k2S1ksckVvSi8JtI2S9rwGfemY8Wd/Tld6EseMoGTtNE9/fX3YntGW6FVxJao02HodvvwNfkg+tXP5P39fjs300ZtEwthYCdZNi68Ib27KJN/ZdQXIXXm3rZbQufPpF2YhrfREoxl4ZCOroVHXX9Hq1XKkedLfVgpf2ll5clfFiOb58woesIn9COc9n/ki6H+IZuxdz7zU+zGVbF45eNulafdmkrD4tBKk74BI09c37fiKJ8tXMyMqanUoyFbfD6HaZLBJhpsTCmPM41cCrl2dFF9TYIdD4RwcQFGPKCGS4yJ97ktwBMKzXKCCIPdsLSsYV2T2Jj7uhb8jzgzwUN0fduJDVbtpNyMSdX4y9EJXH9PACOqAkRYAoRaGFKStI4yJKYYwo0P7+3gE5emVvxLXpRL4DIkwo2+ZVmRYw/GD14xAGQVHlbN3kgdkuEAFa73MbMYbzmLZ9rHJIggTXyEwgo0CLYErRrwoRQSHQGKnQL9eaRdg2njd2stDfzUEHZE9CcAg0oEqKovJ9VRF5baD+Rb/d2qiwLL/liIEOyGF7GViQ0ASCDkifr/jBQBV5tSfKgijKg/Zle/D4BbiNHyIGcUqBBsxp42TOajSakopz7clEH8W6Gevgs8APpbwxIXFmf34/SdS3unEyPfLsVME0VFYDKcKCZ92jQo2Gjk4n7ss/BGm9O+d81BvtymC4zWg+9B2OvM6HE8Ne5UsiveZm0qzz2yHKrWXBm4tm7DieIFb7MeeYjbrUY7qGp9vWbpzgWCTVddIvzPilzRaiGgfo92TTExw7tX6dVcOpuFgKo9ji1Plrk2zq7T2H23S4Yi7S++vTRZzNSnlVjS78XjE8PIwGN9G6V/wgFZKCE8XlWXcsN7oPY/1Nw08Ppe+zCz/V1VLX/kYYPUfBO0f/ReUb7lZwvUfntxDvs+Vf/GmgZVxtAoGbjZOuZK/98OQrWblHveXCktjFG4jycn9r4plxBo/H9w4oU8iigmRAAzQ7taIhRdXK186j4g+ZTMO2jXfnppAy/dMSG5whymBWAo1X+nyvJ6my+HZrSYrSgjQBGhA99Siqrb4bvSzXDLIPhwG9/RzfBo+f3A75JH0HAAA=",
  PREFIX: process.env.PREFIX || ".",
  
  // Auto Features
  AUTO_STATUS_SEEN: parseBoolean(process.env.AUTO_STATUS_SEEN, true),
  AUTO_STATUS_REACT: parseBoolean(process.env.AUTO_STATUS_REACT, true),
  AUTO_STATUS_REPLY: parseBoolean(process.env.AUTO_STATUS_REPLY, false),
  AUTO_STATUS_REPLY_VOICE: parseBoolean(process.env.AUTO_STATUS_REPLY_VOICE, false),
  AUTO_STATUS_REPLY_VOICE_MULTI: parseBoolean(process.env.AUTO_STATUS_REPLY_VOICE_MULTI, false),
  STATUS_READ_MSG: process.env.STATUS_READ_MSG || "*📍 Auto Status Seen Bot By CYBER-DEXTER-MD*",

  AUTO_DL: parseBoolean(process.env.AUTO_DL, false),
  AUTO_READ: parseBoolean(process.env.AUTO_READ, false),
  AUTO_TYPING: parseBoolean(process.env.AUTO_TYPING, false),
  AUTO_RECORDING: parseBoolean(process.env.AUTO_RECORDING, true),
  AUTO_STATUS_REACT: parseBoolean(process.env.AUTO_STATUS_REACT, false),
  ALWAYS_ONLINE: parseBoolean(process.env.ALWAYS_ONLINE, false),

  // Call Settings
  REJECT_CALL: parseBoolean(process.env.REJECT_CALL, false),

  // General Settings
  NOT_ALLOW: parseBoolean(process.env.NOT_ALLOW, true),
  MODE: process.env.MODE || "public",
  OWNER_NAME: process.env.OWNER_NAME || "✪⏤CYBER-DEXTER",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "94785274495",

  // API Keys
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc",

  // Features
  WELCOME: parseBoolean(process.env.WELCOME, true),

  // Trigger Words
  triggerWords: [
    "ඔනි", "send", "එවන්න", "sent", "giv", "gib", "upload",
    "send me", "sent me", "znt", "snt", "ayak", "do", "mee", "autoread"
  ],
};

module.exports = config;
