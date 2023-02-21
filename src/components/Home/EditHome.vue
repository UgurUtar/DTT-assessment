<script>
export default {
    data() {
      return {
        houses: [
          { id: 1, street: "Johan Kernstraat", housenumber: "17", price: "€ 200.000", postalcode: "1063VC", garage: "no", city: "Amsterdam", beds: "3", baths: "1", size: "100 m2" }
        ]
      };
    }
};
</script>

<template>

    <div class="wrapper">
        <img src="../../assets/dtt/img_background.png" class="background">
        <div class="back">
            <div class="mobile-back">
                <router-link class="back-class" @click="$router.go(-1)" to="">
                    <img class="back-button" src="../../assets/dtt/ic_back_grey.png" alt="back">
                        <a class="back-text">Back to detail page</a>
                </router-link>
            </div>
            <div class="mobile-listing">
                <h1 class="mobile-title">Create new listing</h1>
            </div>
        </div>
        <h1 class="title">Edit listing</h1>

        <div class="form" v-for="house in houses" :key="house.id">
            <div class="streetname">
                <label class="labelstreet" for="street">Street name*</label>
                <input class="street" required type="text" :value="house.street" placeholder="Enter the street class">
            </div>

            <div class="numberandaddition">
                <div class="number">
                    <label class="labelhousenumber" for="housenumber">House number*</label>
                    <input class="housenumber" required type="text" :value="house.housenumber" placeholder="Enter house number">
                </div>

                <div class="extra">
                    <label class="labeladdition" for="addition">Addition (optional)</label>
                    <input class="addition" type="text" placeholder="e.g. A">
                </div>
            </div>


            <div class="postcode">
                <label class="labelpostalcode" for="postalcode">Postal code*</label>
                <input class="postalcode" type="text" :value="house.postalcode" placeholder="e.g. 1000 AA">
            </div>

            <div>
                <label class="labelcity" for="city">City*</label>
                <input class="city" type="text" :value="house.city" placeholder="e.g. Utrecht">
            </div>

            <div class="picture">
                <label class="labelpicture">Upload picture (PNG or JPG)*</label>
                <input id="image" type="file" accept=".jpg, .png">
            </div>

            <label class="labelimage" for="image">   
                <img class="imageplus" src="../../assets/dtt/ic_plus_grey.png" alt="plus">
            </label>

            <div class="price">
                <label class="labelprice" for="price">Price*</label>
                <input class="price" type="text" :value="house.price" placeholder="e.g. €150.000">
            </div>

            <div class="sizeandgarage">
                <div class="sizefield">
                    <label class="labelsize" for="size">Size*</label>
                    <input class="size" type="text" :value="house.size" placeholder="e.g. 60m2">
                </div>

                <div class="garagefield">
                    <label class="labelgarage" for="garage">Garage*</label>
                    <select  class="garage">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
                </div>
            </div>

            <div class="bedandbath">
                <div class="bedfield">
                    <label class="labelbed" for="bed">Bedrooms*</label>
                    <input class="bed" type="text" placeholder="Enter amount">
                </div>

                <div class="bathfield">
                    <label class="labelbath" for="bath">Bathrooms*</label>
                    <input class="bath" type="text" placeholder="Enter amount">
                </div>
            </div>

            <div class="constructiondate">
                <label class="labeldate" for="date">Date*</label>
                <input class="date" type="text" placeholder="e.g. 1990">
            </div>

            <div class="desc">
                <label class="labeldescription" for="description">Description*</label>
                <textarea class="description" type="text" placeholder="Enter description"></textarea>
            </div>

            <div class="post">
                <button class="postbutton">POST</button>
            </div>
        </div>

    </div>
</template>

<style scoped>
.wrapper {
    width: 100%;
    height: 100%;
    position: relative;
}

.background {
    width: 100%;
    height: 100%;
    position: absolute;
}

.mobile-listing {
    display: none;
}

.back {
    display: flex;
    align-items: center;
    margin-left: 15%;
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

.back-text {
    font-size: 14px;
    font-family: var(--font-family);
    font-weight: 600;
    color: var(--primary-text);
    margin-left: 10px;
    text-decoration: none;
}

.title {
    font-size: 24px;
    font-family: var(--font-family);
    font-weight: 700;
    color: var(--primary-text);
    margin-left: 15%;
    margin-top: 30px;
}

.form {
    display: flex;
    flex-direction: column;
    width: 25%;
    margin-left: 15%;
    margin-top: 30px;
}

.number, .extra, .bathfield, .bedfield {
    width: 100%;
}

input, textarea, select {
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 5px;
    padding-left: 10px;
    font-size: 11px;
    font-family: var(--font-family);
    font-weight: 600;
    color: var(--secondary);
    margin-bottom: 10px;
}

label {
    font-size: 11px;
    font-family: var(--font-family);
    font-weight: 600;
    color: var(--secondary);
    margin-bottom: 5px;
}

.sizeandgarage,
.bedandbath,
.numberandaddition {
display: flex;
gap: 10px;
}

.description {
    height: 100px;
    padding-top: 10px;
    resize: none;
}

.garage {
    background-color: var(--background2);
}

.sizefield, .garagefield {
    width: 50%;
}

.picture>input {
    display: none;
}

.imageplus {
    width: 30px;
    height: 30px;
}

.labelimage {
    border-style: dashed;
    border-color: var(--tertiary2);
    border-width: 2px;
    width: 120px;
    height: 120px;
}

.labelimage>img {
    margin-left: 42px;
    margin-top: 40px;
}

.post {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
}

.postbutton {
    width: 170px;
    height: 40px;
    border: none;
    border-radius: 5px;
    background-color: var(--primary);
    font-size: 14px;
    font-family: var(--font-family);
    font-weight: 700;
    color: var(--background2);
    cursor: pointer;
}

@media screen and (max-width: 750px) {

.wrapper {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
}

.background {
    width: 100%;
    bottom: 0;
    height: 50%;
    position: absolute;
    filter: blur(6px);
}

.back {
    display: flex;
    margin-left: 20px;
    margin-top: 30px;
}

.back-class {
    text-decoration: none;
    display: flex;
    margin-top: 0;
}

.mobile-listing {
    display: grid;
    width: 100%;
    height: 100%;
    margin-right: 20px;
    justify-items: center;
    align-items: center;
    white-space: nowrap;
}

.back-button {
    width: 20px;
    height: 20px;
}

.back-text {
    display: none;
}

.title {
    display: none;
}
.mobile-title {
    font-size: 24px;
    font-family: var(--font-family);
    font-weight: 700;
    color: var(--primary-text);
}

.form {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin-left: 20px;
    margin-top: 30px;
    padding-bottom: 20%;
}

input, textarea, select {
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 5px;
    padding-left: 10px;
    font-size: 11px;
    font-family: var(--font-family);
    font-weight: 600;
    color: var(--tertiary2);
    margin-bottom: 10px;
}

label {
    font-size: 11px;
    font-family: var(--font-family);
    font-weight: 600;
    color: var(--secondary);
    margin-bottom: 5px;
}

.sizeandgarage,
.bedandbath,
.numberandaddition {
display: flex;
gap: 10px;
}

.description {
    height: 100px;
    padding-top: 10px;
    resize: none;
}

.garage {
    background-color: var(--background2);
}

.sizefield, .garagefield {
    width: 50%;
}

.picture>input {
    display: none;
}

.imageplus {
    width: 30px;
    height: 30px;
}

.number, .extra, .bathfield, .bedfield {
    width: 100%;
}
.labelimage {
    border-style: dashed;
    border-color: var(--tertiary2);
    border-width: 2px;
    width: 120px;
    height: 120px;
}

.labelimage>img {
    margin-left: 42px;
    margin-top: 40px;
}

.post {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
}

.postbutton {
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 5px;
    background-color: var(--primary);
    font-size: 14px;
    font-family: var(--font-family);
    font-weight: 700;
    color: var(--background2);
    cursor: pointer;
}

}
</style>