<template>
    <div>
        <div class="background-container">
            <div class="created-container">
                    <button @click="closeModal" href="#" class="created-cancel-image"></button>
                    <div>
                        <slot></slot>
                    </div>    
            </div> 
        </div>
    </div>
</template>


<script>
export default {
    methods: {
        closeModal() {
            alert('close modal')    
        }
    }
}
</script>

<style scoped>
.background-container{
    width: 100%;
    height: 100vh;
    margin: auto;
    justify-content: center;
    display: flex;
    text-align: center;
    flex-direction: column;
    background: rgba(0, 0, 0, 0.537);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 900
}

button {
    border: none;
    background-image: url('../assets/icons/Closecancel.svg');
    background-color: transparent;
    width: 18px;
    position: absolute;
    right: 16px;
    top: 16px;
    height: 18px;
    background-repeat: no-repeat;
}

.created-container {
    background-color: #fff;
    position: relative;
    box-shadow: 0px 4px 20px rgba(186, 197, 255, 0.25);
    border-radius: 10px;
    padding: 0 26px;
    margin: auto;
    animation: scale 0.2s forwards ease-in;
}


.btn-continue:active {
    background: #4B86FD;
    border: 1px solid #4B86FD;
    box-shadow: 0px 0px 0px 5px #4B86FD1A; 
}

@keyframes scale {
    0% {transform: scale(1,1);}
    70% {transform: scale(1.1,1.1);}
    100% {transform: scale(1,1);}
  }

@media (min-width: 1280px) {
    .created-container {      
        padding: 0 60px;      
    }

    .created-check-image {
        margin: 72px 0 19px;
    }

    .created-header-text {
        margin-bottom: 29px;
    }  
    
    .btn-continue {
        margin-bottom: 52px;
    }
}
</style>