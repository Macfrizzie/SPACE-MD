require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAIZS6Vokv*gKXAQAAIEHAAAKAAAAY3JlZHMuanNvbpVU25KiSBD9l3rFGLl7ieiIBRoRFbyBoBvzUEKBKDerCgQn*PcJ7O7pedid7eWpyKrKPHXOyfwB8iIhaI5aMP4BSpzUkKJuSdsSgTFQqyhCGPRACCkEY+CaPPFMnr*TOl6YGXegZbEk0UJmWvMUBzPT7Q*7l6WfZsULePRAWR3TJPhDwsttNLVTMnvtS8Z5tJ2nfs440D8cZdezmH7ZDvSFcbxu2UZ8AY8uI0xwksd6eUIZwjCdo3YFE*w1+LFlVP7y7u7SJfTFbXhnUso4h2k8j*tmm0TLFbPJ5nn2mg2*Bt8TRGVurFhi8pi*EdmZN1RSiqs*8VHAVSFjB4PsfDgX2voNPkniHIVmiHKa0PbLvA8VUjR2pl+H6+zSqsxOt0OUs+d8k*NNGE9mpqvtpoXp8V*k*aZa7MzmuEbQrUXqHxw7nXIidN1t2MJ8syeZJAwLqfYM5XfgK*zhlcv*4X0*uYapzDFtobjHkQ4P8NygEWT6+nWa3pvh5Kg5UGVnLbf+GvzZ5VxatcPi42xBhHZp81O2nsizaXyZSbOlEuENhfss2POXT*iQVvhPKJvhektnPmP365Unj074avUbpM68javyDarWa1NOxCChp1EaOB6N5of65F4nA846ZkV*R7HDDkfLC8MfiX2paa1O1qf1y*NFF9SaIRhzjx7AKE4IxZAmRd7FBL4HYFhvUYARfbILKveInVOp1enMNJx7s9sUN+qWdu7GyBNuFwmpd0UyN6xfvIAeKHERIEJQOE0ILXBrIUJgjAgY**29B3LU0DfdntW4HogSTKibV2VawPBD1I9NGARFldNtmwdat0AYjNnPMKI0yWPS0VjlEAenpEbaCVICxhFMCfr1QIRRCMYUV+hX02pF2PG+X6iaJ032oAeypx5JCMaAF8QhKwx4bihy4pgb*EW+3bq8sCy*5YiCHshhdxzoF1Idiy6QPi9y8kgSOJaTeVHih0J3tdt4*MLclQgRhUlKwBho5qLIBmtDt5FeBZZhvN5iRYsV8PnGD6+8iRHckXg*TJQZEjd3S7ufkIvCaMKHPi*BovFv9cCJGv4yYoOXf0gCxsBWDLSplPXmnHGLhaJpm+uR0xNkL5dLAzaT2luxy9AaxhM0ckT5KpyFfWqdsBsfsthfp4bl1ukJ69pVkVo4WTPSmVNvL121ENVJgH4v9lqK8JBvb1xObkzlyvBwVogtLEeuYwmL1FIjXz6bQRCd5deTZMf66ybfYXpoQ9YNVsvFSom3XnA+wmqneWGL9oOjdY7fXPzsovR9eiVPg3Xqdb9Rgp7D4F2k*1bzDXnnOvbR+y3J+3z5lx5VfUuoLH6z1vxKD+4KEf10mvtNmO9GlXe1dsMFwwrDsFyFU*B4fO+BMoU0KnAGxoBkRwh6ABdV52Ezj4o*VNJU01TfuzeFhCqffeEkGSIUZiUYcwOJZyVZ5Ni3UytclFNITh0FhqhkVWfyVinLLYX0o82A0n3GJgCPn1BLAQIUAxQAAAgIAIZS6Vokv*gKXAQAAIEHAAAKAAAAAAAAAAAAAACkgQAAAABjcmVkcy5qc29uUEsFBgAAAAABAAEAOAAAAIQEAAAAAA==',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '2348037218414',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'macfrizzie',
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 11223344,
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'false',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
