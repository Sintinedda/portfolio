<script>
   var lastMod = document.lastModified;
   var tabMonth = new Array('Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre');
   var lastDate = new Date(lastMod);
   var year = lastDate.getFullYear();
   
   export default {
         data() {
            return {
            message: (lastDate.getDate() + ' ') + (tabMonth[lastDate.getMonth()] + ' ') + (year) 
            } 
         }    
   }
</script>

<template>
   <div class="logo">
      <a href="https://www.facebook.com/Jerem.Sinti" onclick="window.open(this.href); return false;"><img src="../assets/img/logoFacebook.jpg" alt="Logo de Facebook"></a>
      <a href="https://github.com/Sintinedda" onclick="window.open(this.href); return false;"><img src="../assets/img/logoGithub.jpg" alt="Logo de Github"></a>
      <a href="https://www.linkedin.com/in/jeremy-aboudan-66668a2a9/" onclick="window.open(this.href); return false;"><img src="../assets/img/logoLinkedin.png" alt="Logo de Linkedin"></a>
      <a href="https://twitter.com/Sintine2da" onclick="window.open(this.href); return false;"><img src="../assets/img/logoX.png" alt="Logo de X"></a>
   </div>
   <p>Dernière mise à jour le {{ message }}.</p>
</template>

<style scoped>
   .logo{
      display: flex;
      column-gap: 20px;
      justify-content: center;
      padding-top: 2rem;
   }

   .logo img{
      width: 80px;
      border-radius: 12%;
   }

   p{
      text-align: center;
      padding: 1rem;
      font-style: italic;
   }
</style>