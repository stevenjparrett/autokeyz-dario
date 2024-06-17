module.exports = {
     apps: [
       {
         name: 'NextApp',
         script: 'npm',
         args: 'start',
         watch: true,
         env: {
           NODE_ENV: 'production',
           PORT: 3000 // Default Next.js port
         }
       },
       {
         name: 'NodeServer',
         script: './server.js',
         watch: true,
         env: {
           NODE_ENV: 'production',
           PORT: 3001 // Separate port for your custom server
         }
       }
     ]
};
   