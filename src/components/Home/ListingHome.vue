<script>
export default {
    data() {
      return {
        houses: [
          { id: 1, street: "Johan Kernstraat 17", price: "€ 200.000", postalcode: "1063VC Amsterdam", beds: "3", baths: "1", size: "100 m2" },
          { id: 2, street: "Johan Kernstraat 17", price: "€ 200.000", postalcode: "1063VC Amsterdam", beds: "3", baths: "1", size: "100 m2" },
          { id: 3, street: "Johan Kernstraat 17", price: "€ 200.000", postalcode: "1063VC Amsterdam", beds: "3", baths: "1", size: "100 m2" }
        ]
      };
    }
};
</script>

<template>
    <div class="wrapper">
        <div class="house" v-for="house in houses" :key="house.id">
            <div class="houseimage">
                <img class="houseimg" src="@/assets/dtt/img_placeholder_house.png" alt="house">
            </div>
            <div class="inforow">
                <a class="street">{{ house.street }}</a>
                <a class="price">{{ house.price }}</a>
                <a class="postalcode">{{ house.postalcode }}</a>
                <div class="houseinfo">
                    <img class="bed" src="@/assets/dtt/ic_bed.png" alt="bed">
                    <a class="beds">{{ house.beds }}</a>
                    <img class="bath" src="@/assets/dtt/ic_bath.png" alt="bath">
                    <a class="baths">{{ house.baths }}</a>
                    <img class="size" src="@/assets/dtt/ic_size.png" alt="size">
                    <a class="sizes">{{ house.size }}</a>
                </div>
            </div>
            <div class="edits">
                <RouterLink class="edit" to="/edit-house">
                    <img class="edit" src="@/assets/dtt/ic_edit.png" alt="edit">
                </RouterLink>
                <RouterLink class="delete" to="/delete">
                    <img class="delete" src="@/assets/dtt/ic_delete.png" alt="delete">
                </RouterLink>
            </div>
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

.houseimage img  {
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
}

.price {
    color: var(--secondary);
}

.postalcode {
    color: var(--tertiary2);
}

.houseinfo {
    height: 10%;
    margin-top: 5px;
    padding-right: 10px;
    width: 30%;
    display: flex;
    color: var(--secondary-text);
}

.houseinfo a {
    font-family: var(--secondary-text);
    font-size: 14px;
    white-space: nowrap;
    margin-right: 10px;
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

.houseimage img  {
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