function HotelModel() {
    this.name = "";
    this.rating = -1;
    this.category = "";
    this.userRating = -1;
    this.chain = "";
    this.website = "";
    this.descriptions = [];
    this.CI=new Contactinformation();
    this.locality = new HotelLocality();
}

function ContactInformation()
{
    this.phonenumber="";
    this.fax="";
    this.email="";
}

function HotelLocality() {
    this.address1 = "";
    this.address2 = "";
    this.city = "";
    this.state = "";
    this.country = "";
    this.zipcode = "";
    this.lat = -1;
    this.lng = -1;
    this.localAttraction = "";
    this.mot = []; //mode of transport
}

function ContactPerson()
{
    this.Name="";
    this.CI=new ContactInformation();
}

