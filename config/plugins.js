module.exports=({ env })=>   ({ 
    upload:{ 
      provider: "cloudinary",
      providerOptions:{ 
        cloud_name:'dhhuemjhf',
        api_key:'717721136637757',
        api_secret: 'h3urE5uA-V-7sffed06oBL1qsH8'
      }
    },
    
    email: {
        provider: 'nodemailer',
        providerOptions: {
          host: 'smtp.gmail.com',
          port: 587,
          auth: {
            user: 'nanjinzhu202012@gmail.com',
            pass: 'xq_b6!r?237wjqW',
          },
          // ... any custom nodemailer options
        },
        settings: {},
      },
  });
