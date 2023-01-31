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
        <div class="back">
            <router-link class="back-class" to="/">
                <img class="back-button" src="../../assets/dtt/ic_back_grey.png" alt="back">
                <a class="back-text">Back to overview</a>
            </router-link>
            <router-link class="mobile-back-class" to="/">
                <img class="mobile-back-button" src="../../assets/dtt/ic_back_white.png" alt="back">
            </router-link>

            <div class="mobile-edits">
            <router-link to="/edit-house">
                <img class="mobile-edit" src="../../assets/dtt/ic_edit_white.png" alt="edit">
            </router-link>
            <router-link to="/delete">
                <img class="mobile-delete" src="../../assets/dtt/ic_delete_white.png" alt="delete">
            </router-link>
        </div>
        </div>

        <div class="mid">
        <div class="house">
            <div class="image">
                <img class="houseimage" src="../../assets/dtt/img_placeholder_house.png" alt="house">
            </div>
            <div class="housedetail">
                <div class="firstline">
                    <a class="street">Johan Kernstraat 17</a>
                    <div class="edits">
                        <router-link class="edit" to="/edit-house">
                            <img class="edit" src="../../assets/dtt/ic_edit.png" alt="edit">
                        </router-link>
                        <router-link class="delete" to="/delete">
                            <img class="delete" src="../../assets/dtt/ic_delete.png" alt="delete">
                        </router-link>
                        
                    </div>
                </div>
                <div class="details">
                    <div class="postalcode">
                        <img src="../../assets/dtt/ic_location.png" alt="location" class="postalcodeimage">
                        <a class="postalcodetext"> 1065 VC Amsterdam</a>
                    </div>
                    <div class="price">
                        <img src="../../assets/dtt/ic_price.png" alt="price" class="priceimage">
                        <a class="pricetext">1.500.000</a>
                        <img src="../../assets/dtt/ic_size.png" alt="size" class="sizeimage">
                        <a class="sizetext">120 m2</a>
                        <img src="../../assets/dtt/ic_construction_date.png" alt="built" class="builtimage">
                        <a class="builttext">Built in 2020</a>
                    </div>
                    <div class="info">
                        <img src="../../assets/dtt/ic_bed.png" alt="bed" class="bedimage">
                        <a class="bedtext">1</a>
                        <img src="../../assets/dtt/ic_bath.png" alt="bath" class="bathimage">
                        <a class="bathtext">1</a>
                        <img src="../../assets/dtt/ic_garage.png" alt="garage" class="garageimage">
                        <a class="garagetext">No</a>
                    </div>
                    <div class="text">
                        <a class=infotext>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pulvinar quis eros a ultrices. Nullam quam turpis, imperdiet vitae risus ac, tincidunt mattis dui. Donec at arcu nec urna fermentum blandit. Aliquam at quam facilisis, tristique mi ut, facilisis mauris. Ut placerat turpis sed dignissim condimentum. Ut auctor, lorem vel congue varius, tellus risus maximus elit, at dignissim ante leo non nunc. Morbi lacinia convallis dolor. </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="recommended">
            <a class="recommendedtext">Recommended for you</a>
                <div class="smallhouse" v-for="house in houses" :key="house.id">
                    <img src="../../assets/dtt/img_placeholder_house.png" alt="" class="smallhouseimage">
                    <div class="smallhousedetail">
                        <div class="smallstreet">
                            <a class="smallhousestreet">{{ house.street }}</a>
                        </div>
                        <div class="smallprice">
                            <a class="smallhouseprice">{{ house.price }}</a>
                        </div>
                        <div class="smallpostalcode">
                            <a class="smallhousepostalcode">{{ house.postalcode }}</a>
                        </div>

                        <div class="smalldetails">
                            <img src="../../assets/dtt/ic_bed.png" alt="bed" class="smallbedimage">
                            <a class="smallbedtext">{{ house.beds }}</a>
                            <img src="../../assets/dtt/ic_bath.png" alt="bath" class="smallbathimage">
                            <a class="smallbathtext">{{ house.baths }}</a>
                            <img src="../../assets/dtt/ic_size.png" alt="size" class="smallsizeimage">
                            <a class="smallsizetext">{{ house.size }}</a>
                        </div>
                    </div>
                </div>
        </div>

    </div>
    </div>
</template>

<style scoped>
.wrapper {
    width: 70%;
    margin-left: 15%;
}

.mid {
    display: flex;
    width: 100%;
}

.back {
    display: flex;
    align-items: center;
}

.back-class {
    display: flex;
    align-items: center;
    text-decoration: none;
    margin-top: 30px;
}

.back-button {
    width: 20px;
    height: 20px;
}

.mobile-edits {
    display: none;
}

.back-text {
    font-size: 14px;
    font-family: var(--font-family);
    font-weight: 600;
    color: var(--primary-text);
    margin-left: 10px;
    text-decoration: none;
}

.house {
    width: 70%;
    height: 100%;
    margin-top: 30px;
}

.image {
    display: flex;
}

.houseimage {
    width: 100%;
    height: 100%;
}

.housedetail {
    width: 100%;
    height: 90%;
    background: var(--background2);
    padding-bottom: 50px;
}

.firstline {
    display: flex;
    justify-content: space-between;
    margin-left: 30px;
}

.street {
    font-size: 22px;
    font-family: var(--font-family);
    font-weight: 600;
    color: var(--primary-text);
    margin-top: 20px;
}

.edits {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
}

.edit,
.delete {
    width: 17px;
    height: 17px;
    margin-right: 20px;
}

.mobile-back-button {
    display: none;
}

.postalcodetext,
.pricetext,
.sizetext,
.builttext,
.bedtext,
.bathtext,
.garagetext {
    font-size: 10px;
    font-family: var(--font-family);
    font-weight: 525;
    color: var(--secondary-text);
}

.postalcodeimage,
.priceimage,
.sizeimage,
.builtimage,
.bedimage,
.bathimage,
.garageimage {
    width: 15px;
    height: 15px;
    margin-top: 20px;
    margin-left: 30px;
}

.priceimage,
.sizeimage,
.builtimage,
.bedimage,
.bathimage,
.garageimage {
    margin-right: 5px;
}

.text {
    margin-left: 30px;
    margin-top: 10px;
    margin-right: 20px;
}

.recommended {
    width: 40%;
    margin-top: 30px;
    margin-left: 9%;
}

.recommendedtext {
    font-size: 20px;
    font-family: var(--font-family);
    font-weight: 650;
    color: var(--primary-text);
}

.smallhouse {
    display: flex;
    margin-top: 20px;
    background: var(--background2);
    border-radius: 5px;
    padding: 6px;
}

.smallhouseimage {
    width: 80px;
    height: 80px;
    border-radius: 5px;
    object-fit: cover;
    object-position: left;
}

.smallhousedetail {
    width: 70%;
    margin-left: 5px;
}

.smallstreet, .smallprice, .smallpostalcode {
    display: flex;
    justify-content: space-between;
}

.smallhousestreet {
    font-weight: 550;
    font-size: 9px;
    color: var(--primary-text);
}

.smallhouseprice {
    font-size: 8px;
    color: var(--secondary);
}

.smallhousepostalcode {
    font-size: 8px;
    color: var(--tertiary2);
}

.smalldetails {
    display: flex;
    margin-top: 30px;
}

.smallbedimage, .smallbathimage, .smallsizeimage {
    width: 10px;
    height: 10px;
    margin-right: 5px;
    margin-left: 5px;
    margin-top: 2px;
}

.smallbedtext, .smallbathtext, .smallsizetext {
    font-size: 7px;
    white-space: nowrap;
    font-weight: 700;
    color: var(--tertiary2);
    margin-top: 2px;
}

@media screen and (max-width: 750px) {

.back-class {
    display: none;
}

.wrapper {
    width: 100%;
    margin-left: 0;
    position: relative;
}

.mid {
    display: block;
}
.house {
    width: 100%;
    height: 100%;
    margin-top: 0;
}

.mobile-back-button{
    display: flex;
    width: 20px;
    height: 20px;
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 20px;
    margin-left: 20px;
    z-index: 1;
}
.mobile-edits {
    display: flex;
    width: 20px;
    height: 20px;
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 20px;
    margin-right: 50px;
    z-index: 1;
    gap: 20px;
}


.houseimage {
    width: 100%;
    height: 100%;
}

.housedetail {
    width: 100%;
    height: 60%;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    bottom: 55px;
}

.postalcodetext,
.pricetext,
.sizetext,
.builttext,
.bedtext,
.bathtext,
.garagetext {
    font-size: 13px;
    font-family: var(--font-family);
    font-weight: 525;
    color: var(--secondary-text);
}

.postalcodeimage,
.priceimage,
.sizeimage,
.builtimage,
.bedimage,
.bathimage,
.garageimage {
    width: 15px;
    height: 15px;
    margin-top: 20px;
    margin-left: 20px;
}

.edits {
display: none;
}

.mobile-edit,
.mobile-delete {
    width: 17px;
    height: 17px;
}
.recommended {
    width: 90%;
    margin-top: 0;
    margin-left: 5%;
}

.smallhouse {
    display: flex;
    margin-top: 10px;
    background: var(--background2);
    border-radius: 5px;
    padding: 6px;
}

.smallhouseimage {
    width: 80px;
    height: 80px;
    border-radius: 5px;
    object-fit: cover;
    object-position: left;
}

.smallhousedetail {
    margin-left: 10px;
}

.smallstreet, .smallprice, .smallpostalcode {
    display: flex;
    justify-content: space-between;
}

.smallhousestreet {
    font-weight: 550;
    font-size: 13px;
    color: var(--primary-text);
}

.smallhouseprice {
    font-size: 10px;
    color: var(--secondary);
}

.smallhousepostalcode {
    font-size: 10px;
    color: var(--tertiary2);
}

.smalldetails {
    display: flex;
    margin-top: 10px;
}

.smallbedimage, .smallbathimage, .smallsizeimage {
    width: 10px;
    height: 10px;
    margin-right: 5px;
    margin-left: 5px;
    margin-top: 2px;
}

.smallbedtext, .smallbathtext, .smallsizetext {
    font-size: 9px;
    white-space: nowrap;
    font-weight: 700;
    color: var(--tertiary2);
    margin-top: 2px;
}


}


</style>