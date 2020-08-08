<template>
<div>
        <header>
        <img width="35" src="../../assets/logo.png" alt="web">
       <ul>
           <li><router-link to="/">Blog</router-link></li>
           <li><router-link to="/add">Add Blogs</router-link></li>
           <li>Tech</li>
           <li>Entertainment</li>
           <li>Travel</li>
           <li>Sports</li>
       </ul>

        
    </header>
    <div class="default-margin"></div>
</div>
</template>


<style scoped>
*{
    padding: 0%;
    border: 0%;
    margin:0px !important;
    text-decoration: none;
}
header{
    padding-top: 30px;
    background:lightgreen;
    position: absolute;
    width: 100%;
    height: 70px;
    overflow: hidden;
    
}
header ul li{
    text-decoration: none;
    display: inline-block;
    text-align: center;
    padding: 5px;
    margin-right:5px;
    line-height: 30px;
    transition:all 0.9s;
    overflow: hidden;
    
}

li:hover{
    
    font-size: 25px;
    color: white;
}
header img{
    float:left;
    margin-top: 20px;
}
header{
    text-align: right;
}
.default-margin{
    height: 80px;

}
</style>>