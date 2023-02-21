<script>
const myHeaders = new Headers();
myHeaders.append("X-Api-Key", "9alQkyY7gWw-L4RDVAsZHvBxiKtdoh05");

const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};
export default {
    data() {
        return {
            houses: [],
        };
    },
    methods: {
        getHouses() {

            fetch("https://api.intern.d-tt.nl/api/houses", requestOptions)
                .then(response => response.json())
                .then(data => this.houses = data)
        },
        deleteHouse(id) {
            const deleteOptions = {
                method: 'DELETE',
                headers: myHeaders,
                redirect: 'follow'
            };
            fetch("https://api.intern.d-tt.nl/api/houses/${id}", deleteOptions)
                .then(response => response.text())
                .then(result => {
                    console.log(result)
                    this.getHouses()
                })
                .catch(error => console.log('error', error));
        }

    },

    mounted() {
        this.getHouses()
    }
}
</script>
<template>
    <div class="wrapper">
        <div class="house" v-for="house in houses" :key="house.id">
            <RouterLink class="housedetail" :to="`/home/detail/${house.id}`">
                <div class="houseimage">
                    <img class="houseimg" :src="`${house.image}`" alt="house">
                </div>
                <div class="inforow">
                    <a class="street">{{ house.location.street }}</a>
                    <a class="price">€ {{ house.price }}</a>
                    <a class="postalcode">{{ house.location.zip + ' ' + house.location.city }}</a>
                    <div class="houseinfo">
                        <img class="bed" src="@/assets/dtt/ic_bed.png" alt="bed">
                        <a class="beds">{{ house.rooms.bedrooms }}</a>
                        <img class="bath" src="@/assets/dtt/ic_bath.png" alt="bath">
                        <a class="baths">{{ house.rooms.bathrooms }}</a>
                        <img class="size" src="@/assets/dtt/ic_size.png" alt="size">
                        <a class="sizes">{{ house.size }} m2</a>
                    </div>
                </div>
                <div class="edits">
                    <RouterLink class="edit" to="/edit-house">
                        <img class="edit" src="@/assets/dtt/ic_edit.png" alt="edit">
                    </RouterLink>
                    <RouterLink class="delete" @click="deleteHouse(house.id)" :to="`/home/detail/${house.id}/delete`">
                        <img class="delete" src="@/assets/dtt/ic_delete.png" alt="delete">
                    </RouterLink>
                </div>
            </RouterLink>
        </div>
    </div>
</template>

<style scoped>
.wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    width: 70%;
    margin-left: 15%;
}

.housedetail {
    display: flex;
    width: 100%;
    height: 100%;
    text-decoration: none;
}

.house {
    display: flex;
    background-color: var(--background2);
    border: solid 0 var(--tertiary);
    border-radius: 5px;
    height: 160px;
    width: 100%;
    padding: 10px;
    margin: 6px;
}

.houseimage img {
    width: 140px;
    height: 140px;
    border-radius: 5px;
    object-fit: cover;
    object-position: left;
}

.inforow {
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-left: 15px;
}

.street {
    font-weight: 550;
    font-size: 18px;
    color: var(--primary-text);
    margin-top: 8px;
}

.price {
    color: var(--secondary);
    margin-top: 5px;
}

.postalcode {
    color: var(--tertiary2);
    margin-top: 5px;
}

.houseinfo {
    height: 10%;
    margin-top: 10px;
    padding-right: 10px;
    width: 30%;
    display: flex;
    color: var(--secondary-text);
}

.houseinfo a {
    font-family: var(--secondary-text);
    font-size: 14px;
    white-space: nowrap;
    margin: -3px 13px 0px 2px;
}

.edits {
    display: flex;
    height: 25px;
    padding: 3px;
}

.edit,
.delete {
    height: 100%;
    margin-left: 5px;
}

@media screen and (max-width: 750px) {
    .wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 30px;
        width: 90%;
        margin-left: 5%;
    }

    .edits {
        position: absolute;
        right: 0;
        display: flex;
        height: 25px;
        padding: 4px;
        margin-right: 10px;
    }

}

@media screen and (max-width: 500px) {
    .wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 30px;
        width: 90%;
        margin-left: 5%;
    }

    .house {
        display: flex;
        background-color: var(--background2);
        border: solid 0 var(--tertiary);
        border-radius: 5px;
        height: 120px;
        width: 100%;
        padding: 10px;
    }

    .street {
        font-weight: 550;
        font-size: 12px;
        color: var(--primary-text);
        width: 65%;
    }

    .inforow {
        display: flex;
        flex-direction: column;
        flex: 1;
        font-weight: 300;
        font-size: 12px;
        width: 67%;
    }

    .houseinfo {
        height: 10%;
        margin-top: 18px;
        width: 90%;
        height: 15px;
    }

    .houseimage img {
        width: 100px;
        height: 100px;
        border-radius: 5px;
        object-fit: cover;
        object-position: left;
    }

    .edits {
        position: absolute;
        right: 0;
        display: flex;
        height: 20px;
        padding: 4px;
    }

    .edit {
        display: flex;
    }

    .delete {
        display: flex;
    }
}
</style>