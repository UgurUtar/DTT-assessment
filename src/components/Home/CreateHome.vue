<script>

</script>

<template>

    <div class="wrapper">
        <img src="../../assets/dtt/img_background.png" class="background">
        <div class="back">
            <router-link class="back-class" to="/">
                <img class="back-button" src="../../assets/dtt/ic_back_grey.png" alt="back">
                <a class="back-text">Back to overview</a>
            </router-link>
        </div>
        <h1 class="title">Create new listing</h1>

        <div class="form">
            <div class="streetname">
                <label class="labelstreet" for="street">Street name*</label>
                <input class="street" required type="text" placeholder="Enter the street class">
            </div>

            <div class="numberandaddition">
                <div>
                    <label class="labelhousenumber" for="housenumber">House number*</label>
                    <input class="housenumber" required type="text" placeholder="Enter house number">
                </div>

                <div>
                    <label class="labeladdition" for="addition">Addition (optional)</label>
                    <input class="addition" type="text" placeholder="e.g. A">
                </div>
            </div>


            <div class="postcode">
                <label class="labelpostalcode" for="postalcode">Postal code*</label>
                <input class="postalcode" type="text" placeholder="e.g. 1000 AA">
            </div>

            <div>
                <label class="labelcity" for="city">City*</label>
                <input class="city" type="text" placeholder="e.g. Utrecht">
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
                <input class="price" type="text" placeholder="e.g. €150.000">
            </div>

            <div class="sizeandgarage">
                <div class="sizefield">
                    <label class="labelsize" for="size">Size*</label>
                    <input class="size" type="text" placeholder="e.g. 60m2">
                </div>

                <div class="garagefield">
                    <label class="labelgarage" for="garage">Garage*</label>
                    <select class="garage">
                    <option disabled selected>Select</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
                </div>
            </div>

            <div class="bedandbath">
                <div>
                <label class="labelbed" for="bed">Bedrooms*</label>
                <input class="bed" type="text" placeholder="Enter amount">
            </div>

            <div>
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
    position: absolute;
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
    width: 20%;
    margin-left: 15%;
    margin-top: 30px;
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
</style>