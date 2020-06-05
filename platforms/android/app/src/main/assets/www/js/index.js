
//Mobile app object
var app = {

    name: "Smartsales",
    version: "1.0.0",
    env: "DEV",
    protocol: "http",
    limit: 6,
    baseUrl: "",
    services: "",
    bills: "",
    topups: "",
    products: "",
    subscriptions: "",
    dinamicSNumber: "",
    dinamicMerc: "",
    dinamicSId: "",
    dinamicCategory: "",
    dinamicOptionKey: "",
    dinamicTitle: "",
    dinamicType: "",
    dinamicPItemId: "",
    dinamicOrderId: "",
    dinamicEnkapStatus: "",
    user: [],
    serviceArray: Array(),
    billArray: Array(),
    topupArray: Array(),
    productArray: Array(),
    subscriptionArray: Array(),
    quote: Array(),



    // Application Constructor
    initialize: function () {
        //this.baseUrl = this.env == "PROD" ? "" : this.protocol + "://192.168.1.137:8080";
        this.baseUrl = this.env == "PROD" ? "" : this.protocol + "://192.168.43.47:8080";
        //this.baseUrl = this.env == "PROD" ? "" : this.protocol + "://192.168.100.100:8080";

        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        delete initialize;

    },

    // deviceready Event Handler
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function () {

        //$("#submitLogin").click(testPing("login"));
        //$("#submitRegister").click(processRegistration);
        $("#services").click(getServices);
        //$("#signUpPage").click(setView("mainDiv", views["signUp"]));
        //$("#serviceOptions").click(getserviceOptions);



    },

};
app.initialize();

//user object
var user = {

    uname: "",
    fname: "",
    phone: "",
    email: "",

    User: function (uname, fname, phone, email) {

        this.uname = uname;
        this.fname = fname;
        this.phone = phone;
        this.email = email;

    }
};

// service object
var service = {

    serviceId: "",
    merchant: "",
    title: "",
    category: "",
    type: "",
    status: "",
    reqCustomerName: "",
    reqCustomerAddr: "",
    reqCustomerNum: "",
    reqServiceNum: "",
    Service: function (id, merc, ttl, cat, typ, stat, rCName, rCAd, rCNum, rSNum) {

        this.serviceId = id;
        this.merchant = merc;
        this.title = ttl;
        this.category = cat;
        this.type = typ;
        this.status = stat;
        this.reqCustomerName = rCName;
        this.reqCustomerAddr = rCAd;
        this.reqCustomerNum = rCNum;
        this.reqServiceNum = rSNum;

    }


};

//bill object
var bill = {

    type: "",
    penalty: "",
    pOrder: "",
    description: "",
    pItemId: "",
    pItemDesc: "",
    serviceNum: "",
    merchant: "",
    amtType: "",
    amount: "",
    billNum: "",
    customerNum: "",
    date: "",
    dueDate: "",
    optStrig: "",
    optNumb: "",

    Bill: function (typ, pen, pOrdr, desc, pItmId, pItmDsc, svcNum, merchnt, amtTyp, amt, bllNum, cstmerNum, date, dueDte, optStr, optnum) {

        this.type = typ;
        this.penalty = pen;
        this.pOrder = pOrdr;
        this.description = desc;
        this.pItemId = pItmId;
        this.pItemDesc = pItmDsc;
        this.serviceNum = svcNum;
        this.merchant = merchnt;
        this.amtType = amtTyp;
        this.amount = amt;
        this.billNum = bllNum;
        this.customerNum = cstmerNum;
        this.date = date;
        this.dueDate = dueDte;
        this.optStrig = optStr;
        this.optNumb = optnum

    }


};

//topup object
var topup = {

    serviceid: "",
    merchant: "",
    pay_item_id: "",
    pay_item_descr: "",
    amount_type: "",
    local_cur: "",
    name: "",
    amount_local_cur: "",
    description: "",
    opt_strg: "",
    opt_nmb: "",

    Topup: function (svcId, merch, pItmId, pItmDsc, amtTyp, localCur, name, amtLocalCur, desc, optStr, optNum) {

        this.serviceid = svcId;
        this.merchant = merch;
        this.pay_item_id = pItmId;
        this.pay_item_descr = pItmDsc;
        this.amount_type = amtTyp;
        this.local_cur = localCur;
        this.name = name;
        this.amount_local_cur = amtLocalCur;
        this.description = desc;
        this.opt_strg = optStr;
        this.opt_nmb = optNum;

    }

};

//product object
var product = {

    serviceid: "",
    merchant: "",
    pay_item_id: "",
    pay_item_descr: "",
    amount_type: "",
    local_cur: "",
    name: "",
    amount_local_cur: "",
    description: "",
    opt_strg: "",
    opt_nmb: "",

    Product: function (svcId, merch, pItmId, pItmDsc, amtTyp, localCur, name, amtLocalCur, desc, optStr, optNum) {

        this.serviceid = svcId;
        this.merchant = merch;
        this.pay_item_id = pItmId;
        this.pay_item_descr = pItmDsc;
        this.amount_type = amtTyp;
        this.local_cur = localCur;
        this.name = name;
        this.amount_local_cur = amtLocalCur;
        this.description = desc;
        this.opt_strg = optStr;
        this.opt_nmb = optNum;

    }

};

//subscription object
var subscription = {

    service_number: "",
    serviceid: "",
    merchant: "",
    pay_item_id: "",
    pay_item_descr: "",
    amount_type: "",
    local_cur: "",
    name: "",
    amount_local_cur: "",
    customer_number:"",
    gen_date: "",
    due_date: "",
    opt_strg: "",
    opt_nmb: "",

    Subscription: function (svcNum,svcId, merch, pItmId, pItmDsc, amtTyp, localCur, name, amtLocalCur, custNum, genDate, dueDate, optStr, optNum) {

        this.service_number = svcNum;
        this.serviceid = svcId;
        this.merchant = merch;
        this.pay_item_id = pItmId;
        this.pay_item_descr = pItmDsc;
        this.amount_type = amtTyp;
        this.local_cur = localCur;
        this.name = name;
        this.amount_local_cur = amtLocalCur;
        this.customer_number = custNum;
        this.gen_date = genDate;
        this.due_date = dueDate;
        this.opt_strg = optStr;
        this.opt_nmb = optNum;

    }

};

//quote object
var quote = {
    qId: "",
    pItemId: "",
    expires: "",
    amount: "",
    price: "",
    localCur: "",
    promotion: "",
    Quote: function (qId, iId, exp, amt, prc, cur, prom) {

        this.qId = qId;
        this.pItemId = iId;
        this.expires = exp;
        this.amount = amt;
        this.price = prc;
        this.localCur = cur;
        this.promotion = prom;

    }
};

//User registration process
function processRegistration() {

    setView("submitRegister", views["spinner"]);
    //open the local sqlite database


    var fname = $("#txt-first-name").val();
    var lname = $("#txt-last-name").val();
    var uname = $("#txt-user-name").val();
    var phone = $("#txt-phone").val();
    var email = $("#txt-email").val();

    //validaton
    if ($("#txt-password").val() == $("#txt-password-confirm").val()) {
        var password = $("#txt-password").val();
    }
    else {
        alert("Passwords do not match!");
        $("#txt-password-confirm").focus();
        setView("submitRegister", "Sign Up");
        return false;
    }

    if (fname == "" || lname == "" || uname == "" || phone == "" || email == "" || password == "") {
        alert("Please fill all required information");
        setView("submitRegister", "Sign Up");
        return false;

    } else if (!isNaN(fname) || !isNaN(lname) || !isNaN(uname) || isNaN(phone)) {

        alert("Please Enter valid Characters");
        setView("submitRegister", "Sign Up");
        return false;

    } else if ((password.length < 5) || (password.length > 15)) {

        alert("Your password must be 5 to 15 Characters");
        $("#txt-password").select();
        setView("submitRegister", "Sign Up");
        return false;

    } else if (!($("#txt-email").val().match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))) {

        alert("You have entered an invalid email address!");
        $("#txt-email").focus();
        setView("submitRegister", "Sign Up");
        return false;
    }
    //test the availability of the s3papi
    testPing("register");


    //add user in smartsales server
    path = "/ssuser/add"

    const options = {
        method: 'post',
        data: {
            'fname': fname,
            'lname': lname,
            'uname': uname,
            'phone': phone,
            'email': email,
            'password': password,

        },
        //headers: { Authorization: 'OAuth2: token' }
    };

    cordova.plugin.http.sendRequest(app.baseUrl + path, options, function (response) {
        // prints 200
        //console.log(response.status);
        var resp = JSON.parse(response.data);
        if (resp == "added") {

            //perform registration in local database
            var db = window.sqlitePlugin.openDatabase({ name: "SmartSales.db", location: 'default' });
            db.transaction(function (tx) {
                //create table or load if it already exists
                tx.executeSql('CREATE TABLE IF NOT EXISTS USERS (ID INTEGER PRIMARY KEY AUTOINCREMENT, FName , LName, UName, Phone,  Email, Password)', [],
                    function (tx, result) {

                    },
                    function (error) {
                        alert("Error occurred while acessing the data." + error.message);
                        setView("submitRegister", "Sign Up");
                    }
                );
                //fill table with user information
                tx.executeSql('INSERT INTO users (FName , LName, UName, Phone, Email, Password) VALUES (?, ?, ?, ?, ?, ?)', [fname, lname, uname, phone, email, password],
                    function (tx, result) {
                        alert("Successfull Registration");
                        setView("mainDiv", views["signUp"]);
                    },
                    function (error) {
                        alert("Error occurred while saving the data." + error.message);
                        setView("submitRegister", "Sign Up");
                    }
                );

            });
            //redirect to login page
            setView('mainDiv', views['login']);

        } else {
            //stop loading
            setView("submitRegister", "Sign Up");
            alert(resp);

        }

    }, function (response) {
        // prints 403
        console.log(response.status);
        setView("submitRegister", "Sign Up");
        //prints Permission denied
        console.log(response.error);
        setView("submitRegister", "Sign Up");
    });





};

//login the user
function processLogin() {
/*
    //open the local sqlite database
    var db = window.sqlitePlugin.openDatabase({ name: "SmartSales.db", location: 'default' });

    var uname = $("#txt-uname").val();
    var password = $("#txt-password").val();

    if (uname == "" || password == "") {
        alert("Please fill all the fields");
        $("#txt-password").focus();
        return false;
    } else if (!isNaN(uname)) {

        alert("invalid User Name or Password..");
        $setView("submitLogin", "Submit");
        return false;

    }

    db.transaction(function (tx) {
        tx.executeSql("SELECT * FROM USERS WHERE UName=? AND Password=? ", [uname, password], function (tx, results) {
            var len = results.rows.length;
            /*var out
            //test
            for (i = 0; i < len; i++) {
               out=out+results.rows.item(i).UName+"/"+results.rows.item(i).Phone+"/"+results.rows.item(i).Password+"\n";
           }
           alert(out);*/
           
            /*if (len > 0) {
                //alert(results.rows.item(0).UName + results.rows.item(0).Phone + results.rows.item(0).Email)
                setUser(results.rows.item(0).UName, results.rows.item(0).FName, results.rows.item(0).Phone, results.rows.item(0).Email);
                navigator.notification.alert(
                    'Welcome '+ app.user.fname,  // message
                    '',         // callback
                    'Welcome',            // title
                    'Thanks'                  // buttonName
                );

                setView("mainDiv", views['home']);
            }
            else {
                alert("Incorrect user name or password");
                setView("submitLogin", "Submit");
                return false;
            }

        },
            function (error) {
                alert("Error occurred while searching data." + error.message);
                setView("submitLogin", "Submit");
                return false;
            }
        );
    });*/
    
    setUser("Cjordan","Chinda", 678289617, "jstar.divinio@gmail.com");
    navigator.notification.alert(
        'Welcome '+ app.user.fname,  // message
        '',         // callback
        'Welcome',            // title
        'Thanks'                  // buttonName
    );
    setView("mainDiv", views['home']);

};

//set the current users data
function setUser(uname, fname, phone, email) {
    app.user = new user.User(uname, fname, phone, email);
};

//display registration page
function displayRegPage() {
    setView("mainDiv", views["signUp"]);
};

//receive a list of available services on s3p
function getServices() {

    path = "/s3papi/service";

    cordova.plugin.http.get(
        app.baseUrl + path,
        '',
        '',
        function (response) {
            // prints 200
            //alert(response.status);
            var svc = JSON.parse(response.data);
            app.services = svc;
            var svcSize = Object.keys(svc).length;

            //Create and objects representing each service
            for (i = 1; i <= svcSize; i++) {

                var k = "svc" + i;


                app.serviceArray[svc[k]["sId"]] = new service.Service(
                    svc[k]["sId"],
                    svc[k]["merchant"],
                    svc[k]["title"],
                    svc[k]["category"],
                    svc[k]["type"],
                    svc[k]["state"],
                    svc[k]["reqCName"],
                    svc[k]["reqAddr"],
                    svc[k]["reqCNum"],
                    svc[k]["reqCNum"]);

            }

            processLogin();

        },
        function (response) {
            // prints 403
            alert(response.status);
            //prints Permission denied
            alert(response.error);
            $("#submitLogin").html('Submit');
        });

};

//check the availability of the s3pApi
function testPing(caller) {
    setView("submitLogin", views['spinner']);

    path = "/s3papi/ping";
    //alert(app.baseUrl+path);

    cordova.plugin.http.get(
        app.baseUrl + path,
        '',
        '',
        function (response) {
            // prints 200
            //alert(response.status);
            re = JSON.parse(response.data);
            if (re == "3.0.0") {
                if (caller == "login") {
                    getServices();
                } else if (caller == "register") {

                    //setView("submitLogin", "Submit");
                }
            } else {
                alert("Connection failed");
            }

        },
        function (response) {
            // prints 403
            alert(response.status);

            //prints Permission denied
            alert(response.error);
            setView("submitLogin", "Submit");
        });

};

//replace the view of an element by id.
function setView(id, view) {

    $("#" + id).html(view);

};

//display the available services on the s3p platform
function displayServices(svc) {

    var services = "";
    var len = Object.keys(svc).length;
    var oDiv = '<div class="row row-cols-3" id = "services">';
    var cDiv = '</div>';

    //iteratively displaying the services
    for (i = 1; i <= len; i++) {

        var k = "svc" + i;
        if( svc[k]["type"] != "CASHOUT" && svc[k]["status"] == "Active" ){
        var div =

            '<div class = "col p-1 w-25 border border-info rounded" id = "' + svc[k]["sId"] + '" class = "' + k + '" onClick = "setServiceView1(' + svc[k]["sId"] + ')" style="background-color:white;">' +
            
            '<img src="../img/'+ svc[k]["merchant"]+ ".png"+ '" alt="'+ svc[k]["title"] +' " class="img-thumbnail img-fluid"></img>'+
            '</div>';


        services += div;
        }

        //creating a service object

    }
    return views['breadCrumbHome'] + oDiv + services + cDiv;
};

//display the available services on the s3p platform by cathegory
function displayServicesByCathegory(svc) {

    var services = "";
    var len = Object.keys(svc).length;

    var billDiv = '';
    var oBillDiv = '<h4>Electricity & Water Bills</h4>' +
        '<div class="row row-cols-3" id = "services">';

    var topupDiv = '';
    var oTopupDiv = '<h4>Mobile & Phone - Prepaid Topup</h4>' +
        '<div class="row row-cols-3" id = "services">';

    var cableDiv = '';
    var oCableDiv = '<h4>Cable & Pay TV</h4>' +
        '<div class="row row-cols-3" id = "services">';

    var onlineDiv = '';
    var oOnlineDiv = '<h4>Online Topup & Internet Services</h4>' +
        '<div class="row row-cols-3" id = "services">';

    var insuranceDiv = '';
    var oInsuranceDiv = '<h4>Insurance & Investment</h4>' +
        '<div class="row row-cols-3" id = "services">';

    var cDiv = '</div>';


    //iteratively displaying the services
    for (i = 1; i <= len; i++) {

        var k = "svc" + i;

        if (svc[k]["category"] == "Electricity & Water Bills" && svc[k]["status"] == "Active") {

            var div =

                '<div class = "col p-1 w-25 border border-info rounded" id = "' + svc[k]["sId"] + '" class = "' + k + '" onClick = "setServiceView1(' + svc[k]["sId"] + ')" style="background-color:white;">' +
                '<img src="../img/'+ svc[k]["merchant"]+ ".png"+ '" alt="'+ svc[k]["title"] +' " class="img-thumbnail img-fluid"></img>'+
                '</div>';


            billDiv += div;

        } else if (svc[k]["category"] == "Mobile & Phone - Prepaid Topup" && svc[k]["type"] != "CASHOUT" && svc[k]["status"] == "Active" ) {

            var div =

                '<div class = "col p-1 w-25 border border-info rounded" id = "' + svc[k]["sId"] + '" class = "' + k + '" onClick = "setServiceView1(' + svc[k]["sId"] + ')" style="background-color:white;">' +
                '<img src="../img/'+ svc[k]["merchant"]+ ".png"+ '" alt="'+ svc[k]["title"] +' " class="img-thumbnail img-fluid"></img>'+
                '</div>';


            topupDiv += div;

        } else if (svc[k]["category"] == "Cable & Pay TV" && svc[k]["status"] == "Active") {

            var div =

                '<div class = "col p-1 w-25 border border-info rounded" id = "' + svc[k]["sId"] + '" class = "' + k + '" onClick = "setServiceView1(' + svc[k]["sId"] + ')" style="background-color:white;">' +
                '<img src="../img/'+ svc[k]["merchant"]+ ".png"+ '" alt="'+ svc[k]["title"] +' " class="img-thumbnail img-fluid"></img>'+
                '</div>';


            cableDiv += div;

        } else if (svc[k]["category"] == "Online Topup & Internet Services" && svc[k]["status"] == "Active") {

            var div =

                '<div class = "col p-1 w-25 border border-info rounded" id = "' + svc[k]["sId"] + '" class = "' + k + '" onClick = "setServiceView1(' + svc[k]["sId"] + ')" style="background-color:white;">' +
                '<img src="../img/'+ svc[k]["merchant"]+ ".png"+ '" alt="'+ svc[k]["title"] +' " class="img-thumbnail img-fluid"></img>'+
                '</div>';


            onlineDiv += div;

        } else if (svc[k]["category"] == "Insurance & Investment" && svc[k]["status"] == "Active") {

            var div =

                '<div class = "col p-1 w-25 border border-info rounded" id = "' + svc[k]["sId"] + '" class = "' + k + '" onClick = "setServiceView1(' + svc[k]["sId"] + ')" style="background-color:white;">' +
                '<img src="../img/'+ svc[k]["merchant"]+ ".png"+ '" alt="'+ svc[k]["title"] +' " class="img-thumbnail img-fluid"></img>'+
                '</div>';


            insuranceDiv += div;

        }



        //creating a service object

    }
    return views['breadCrumbHome'] +
        oBillDiv + billDiv + cDiv +
        oTopupDiv + topupDiv + cDiv +
        oCableDiv + cableDiv + cDiv +
        oOnlineDiv + onlineDiv + cDiv +
        oInsuranceDiv + insuranceDiv + cDiv;
};

//display a page corresponding to the selected service
function setServiceView1(id) {
    if (app.serviceArray[id]["type"] == "SEARCHABLE_BILL" || app.serviceArray[id]["type"] == "NON_SEARCHABLE_BILL" || app.serviceArray[id]["type"] == "SUBSCRIPTION") {
        app.dinamicSId = id;
        app.dinamicCategory = app.serviceArray[id]["category"];
        app.dinamicMerc = app.serviceArray[id]["merchant"];
        app.dinamicTitle = app.serviceArray[id]["title"];
        app.dinamicType = app.serviceArray[id]["type"];
        setView("mainDiv", views["billViewQuery"]);


    } else if (app.serviceArray[id]["type"] == "TOPUP" || app.serviceArray[id]["type"] == "CASHIN") {
        app.dinamicSId = id;
        app.dinamicCategory = app.serviceArray[id]["category"];
        app.dinamicMerc = app.serviceArray[id]["merchant"];
        app.dinamicTitle = app.serviceArray[id]["title"];
        app.dinamicType = app.serviceArray[id]["type"];
        setView("mainDiv", views["topupViewQuery"]);


    } else if (app.serviceArray[id]["type"] == "PRODUCT") {
        app.dinamicSId = id;
        app.dinamicCategory = app.serviceArray[id]["category"];
        app.dinamicMerc = app.serviceArray[id]["merchant"];
        app.dinamicTitle = app.serviceArray[id]["title"];
        app.dinamicType = app.serviceArray[id]["type"];
        setView("mainDiv", views["productViewQuery"]);
    }

};

//form for the query view
function serviceNumberform() {
    if (app.dinamicType == "SEARCHABLE_BILL" || app.dinamicType == "NON_SEARCHABLE_BILL") {
        var formData =
            '<div class="form-group">' +
            '<h2>' + app.dinamicTitle + '</h2>' +
            '</div>' +

            '<div class="form-group">' +
            '<input type="text" class="form-control" name="txt-service-number" id="txt-service-number" placeholder="Service number" required>' +
            '<small id="emailHelp" class="form-text text-muted">eg. Bill number, contract number or meter number</small>' +
            '</div>' +

            '<div class="form-group">' +
            '<input type="text" class="form-control" name="txt-merchant" id="txt-merchant" value="' + app.dinamicMerc + '" required hidden>' +
            '</div>' +

            '<div class="form-group">' +
            '<input type="text" class="form-control" name="txt-service-id" id="txt-service-id" value="' + app.dinamicSId + '" required hidden>' +
            '</div>' +

            '<a href="#" class="btn btn-block" id = "serviceOptions" style="background-color:orange; color:white" onClick = "getServiceOptions()"> next </a>';

    }
    else if(app.dinamicType == "SUBSCRIPTION"){
        var formData =
        '<div class="form-group">' +
        '<h2>' + app.dinamicTitle + '</h2>' +
        '</div>' +

        '<div class="form-group">' +
        '<input type="text" class="form-control" name="txt-service-number" id="txt-service-number" placeholder="Service number" required>' +
        '<small id="emailHelp" class="form-text text-muted">eg. Bill number</small>' +
        '</div>' +

        '<div class="form-group">' +
        '<input type="text" class="form-control" name="txt-merchant" id="txt-merchant" value="' + app.dinamicMerc + '" required hidden>' +
        '</div>' +

        '<div class="form-group">' +
        '<input type="text" class="form-control" name="txt-service-id" id="txt-service-id" value="' + app.dinamicSId + '" required hidden>' +
        '</div>' +

        '<a href="#" class="btn btn-block" id = "serviceOptions" style="background-color:orange; color:white" onClick = "getServiceOptions()"> next </a>';

    }
    else if (app.dinamicType == "TOPUP" || app.dinamicType == "CASHIN") {
        var formData =
            '<div class="form-group">' +
            '<h2>' + app.dinamicTitle + '</h2>' +
            '</div>' +

            '<div class="form-group">' +
            '<input type="text" class="form-control" name="txt-service-number" id="txt-service-number" placeholder="Phone number" required>' +
            '<small id="emailHelp" class="form-text text-muted">eg. 6########</small>' +
            '</div>' +

            '<div class="form-group">' +
            '<input type="text" class="form-control" name="txt-merchant" id="txt-merchant" value="' + app.dinamicMerc + '" required hidden>' +
            '</div>' +

            '<div class="form-group">' +
            '<input type="text" class="form-control" name="txt-service-id" id="txt-service-id" value="' + app.dinamicSId + '" required hidden>' +
            '</div>' +

            '<a href="#" class="btn btn-block" id = "serviceOptions" style="background-color:orange; color:white" onClick = "getServiceOptions()"> next </a>';
    }
    else if (app.dinamicType == "PRODUCT") {
        var formData =
            '<div class="form-group">' +
            '<h2>' + app.dinamicTitle + '</h2>' +
            '</div>' +

            '<div class="form-group">' +
            '<input type="text" class="form-control" name="txt-service-number" id="txt-service-number" placeholder="Service number" required>' +

            '</div>' +

            '<div class="form-group">' +
            '<input type="text" class="form-control" name="txt-merchant" id="txt-merchant" value="' + app.dinamicMerc + '" required hidden>' +
            '</div>' +

            '<div class="form-group">' +
            '<input type="text" class="form-control" name="txt-service-id" id="txt-service-id" value="' + app.dinamicSId + '" required hidden>' +
            '</div>' +

            '<a href="#" class="btn btn-block" id = "serviceOptions" style="background-color:orange; color:white" onClick = "getServiceOptions()"> next </a>';
    }


    return formData;

};

//send a request to get the various options for a particular service number
function getServiceOptions() {
    if (app.dinamicType == "SEARCHABLE_BILL" || app.dinamicType == "NON_SEARCHABLE_BILL") {

        app.dinamicSNumber = $("#txt-service-number").val();
        setView("serviceOptions", views['spinner']);

        path = "/s3papi/sbillopt";

        const options = {
            method: 'post',
            data: {
                serviceNumber: $("#txt-service-number").val(),
                merchant: $("#txt-merchant").val(),
                serviceId: $("#txt-service-id").val(),
            },
            //headers: { Authorization: 'OAuth2: token' }
        };

        cordova.plugin.http.sendRequest(app.baseUrl + path, options, function (response) {
            // prints 200
            //console.log(response.status);
            var bll = JSON.parse(response.data);
            app.bills = bll;
            var bllSize = Object.keys(bll).length;



            //Create and objects representing each bill
            for (i = 1; i <= bllSize; i++) {

                var k = "bll" + i;


                app.billArray[bll[k]["billNum"]] = new bill.Bill(
                    bll[k]["type"],
                    bll[k]["penalty"],
                    bll[k]["pOrder"],
                    bll[k]["description"],
                    bll[k]["pItemId"],
                    bll[k]["pItemDesc"],
                    bll[k]["serviceNum"],
                    bll[k]["merchant"],
                    bll[k]["amtType"],
                    bll[k]["amount"],
                    bll[k]["billNum"],
                    bll[k]["customerNum"],
                    bll[k]["date"],
                    bll[k]["dueDate"],
                    bll[k]["optStrg"],
                    bll[k]["optNmb"]
                );


            }
            setView("mainDiv", views["bills"]);

        }, function (response) {
            // prints 403
            console.log(response.status);
            setView("serviceOptions", "next");
            //prints Permission denied
            console.log(response.error);
            setView("serviceOptions", "next");
        });


    }

    else if (app.dinamicType == "TOPUP" || app.dinamicType == "CASHIN") {

        app.dinamicSNumber = $("#txt-service-number").val();
        setView("serviceOptions", views['spinner']);
        if (app.dinamicType == "TOPUP") {
            path = "/s3papi/stopupopt";
        } else if (app.dinamicType == "CASHIN") {
            path = "/s3papi/scashinopt";
        }


        const options = {
            method: 'post',
            data: {
                serviceNumber: $("#txt-service-number").val(),
                merchant: $("#txt-merchant").val(),
                serviceId: $("#txt-service-id").val()
            },
            //headers: { Authorization: 'OAuth2: token' }
        };

        cordova.plugin.http.sendRequest(app.baseUrl + path, options, function (response) {
            // prints 200
            //console.log(response.status);
            var tp = JSON.parse(response.data);
            app.topups = tp;
            var tpSize = Object.keys(tp).length;



            //Create objects representing each topup
            for (i = 1; i <= tpSize; i++) {

                var k = "tp" + i;


                app.topupArray[tp[k]["pay_item_id"]] = new topup.Topup(
                    tp[k]["serviceid"],
                    tp[k]["merchant"],
                    tp[k]["pay_item_id"],
                    tp[k]["pay_item_descr"],
                    tp[k]["amount_type"],
                    tp[k]["local_cur"],
                    tp[k]["name"],
                    tp[k]["amount_local_cur"],
                    tp[k]["description"],
                    tp[k]["opt_strg"],
                    tp[k]["opt_nmb"]
                );


            }
            setView("mainDiv", views["topups"]);

        }, function (response) {
            // prints 403
            console.log(response.status);
            setView("serviceOptions", "next");
            //prints Permission denied
            console.log(response.error);
            setView("serviceOptions", "next");
        });

    }

    else if (app.dinamicType == "PRODUCT") {

        app.dinamicSNumber = $("#txt-service-number").val();
        setView("serviceOptions", views['spinner']);

        path = "/s3papi/sproductopt";

        const options = {
            method: 'post',
            data: {
                serviceNumber: $("#txt-service-number").val(),
                merchant: $("#txt-merchant").val(),
                serviceId: $("#txt-service-id").val()
            },
            //headers: { Authorization: 'OAuth2: token' }
        };

        cordova.plugin.http.sendRequest(app.baseUrl + path, options, function (response) {
            // prints 200
            //console.log(response.status);
            var pd = JSON.parse(response.data);
            app.products = pd;
            var pdSize = Object.keys(pd).length;



            //Create objects representing each product
            for (i = 1; i <= pdSize; i++) {

                var k = "pd" + i;


                app.productArray[pd[k]["pay_item_id"]] = new product.Product(
                    pd[k]["serviceid"],
                    pd[k]["merchant"],
                    pd[k]["pay_item_id"],
                    pd[k]["pay_item_descr"],
                    pd[k]["amount_type"],
                    pd[k]["local_cur"],
                    pd[k]["name"],
                    pd[k]["amount_local_cur"],
                    pd[k]["description"],
                    pd[k]["opt_strg"],
                    pd[k]["opt_nmb"]
                );


            }
            setView("mainDiv", views["products"]);

        }, function (response) {
            // prints 403
            console.log(response.status);
            setView("serviceOptions", "next");
            //prints Permission denied
            console.log(response.error);
            setView("serviceOptions", "next");
        });

    }
    else if (app.dinamicType == "SUBSCRIPTION") {

        app.dinamicSNumber = $("#txt-service-number").val();
        setView("serviceOptions", views['spinner']);

        path = "/s3papi/ssubscriptionopt";

        const options = {
            method: 'post',
            data: {
                serviceNumber: $("#txt-service-number").val(),
                merchant: $("#txt-merchant").val(),
                serviceId: $("#txt-service-id").val()
            },
            //headers: { Authorization: 'OAuth2: token' }
        };

        cordova.plugin.http.sendRequest(app.baseUrl + path, options, function (response) {
            // prints 200
            //console.log(response.status);
            var sb = JSON.parse(response.data);
            app.subscriptions = sb;
            var sbSize = Object.keys(sb).length;



            //Create objects representing each product
            for (i = 1; i <= sbSize; i++) {

                var k = "sb" + i;


                app.subscriptionArray[sb[k]["pay_item_id"]] = new subscription.Subscription(
                    sb[k]["service_number"],
                    sb[k]["serviceid"],
                    sb[k]["merchant"],
                    sb[k]["pay_item_id"],
                    sb[k]["pay_item_descr"],
                    sb[k]["amount_type"],
                    sb[k]["local_cur"],
                    sb[k]["name"],
                    sb[k]["amount_local_cur"],
                    sb[k]["customer_number"],
                    sb[k]["gen_date"],
                    sb[k]["due_date"],
                    sb[k]["opt_strg"],
                    sb[k]["opt_nmb"]
                );


            }
            setView("mainDiv", views["subscriptions"]);

        }, function (response) {
            // prints 403
            console.log(response.status);
            setView("serviceOptions", "next");
            //prints Permission denied
            console.log(response.error);
            setView("serviceOptions", "next");
        });

    }



};

//display the available bills for a particular service number
function displayBills(bll) {

    var bills = "";
    var blen = Object.keys(bll).length;
    var boDiv = '<div class="row row-cols-1" id = "services">';
    var bcDiv = '</div>';

    for (i = 1; i <= blen; i++) {

        var b = "bll" + i;


        var bdiv =

            '<div class = "col p-1 w-25 border border-info rounded" id = "' + bll[b]["pItemId"] + '" class = "' + b + '" onClick = "dispBillDetails(' + bll[b]["billNum"] + ')" style="background-color:white;">' +
            bll[b]["billNum"] +
            '</div>';


        bills += bdiv;

    }
    return boDiv + bills + bcDiv;

};

//display the available topups for a particular service number
function displayTopups(tp) {

    var topups = "";
    var tlen = Object.keys(tp).length;
    var boDiv = '<div class="row row-cols-1" id = "services">';
    var bcDiv = '</div>';

    for (i = 1; i <= tlen; i++) {

        var t = "tp" + i;

        if (tp[t]["merchant"] == app.dinamicMerc) {




            var tdiv =

                '<div class = "col p-1 w-25 border border-info rounded" id = "' + tp[t]["pay_item_id"] + '" class = "' + t + '" onClick = "dispTopupDetails(\'' + tp[t]["pay_item_id"] + '\')" style="background-color:white;">' +
                tp[t]["name"] +
                '</div>';


            topups += tdiv;
        }


    }
    return boDiv + topups + bcDiv;

};

//display the available products for a particular service number
function displayProducts(pd) {

    var products = "";
    var plen = Object.keys(pd).length;
    var boDiv = '<div class="row row-cols-1" id = "services">';
    var bcDiv = '</div>';

    for (i = 1; i <= plen; i++) {

        var p = "pd" + i;

        if (pd[p]["merchant"] == app.dinamicMerc) {




            var tdiv =

                '<div class = "col p-1 w-25 border border-info rounded" id = "' + pd[p]["pay_item_id"] + '" class = "' + p + '" onClick = "dispProductDetails(\'' + pd[p]["pay_item_id"] + '\')" style="background-color:white;">' +
                pd[p]["name"] +
                '</div>';


            products += tdiv;
        }


    }
    return boDiv + products + bcDiv;

};

//display the available subscriptions for a particular service number
function displaySubscriptions(sb) {

    var subscriptions = "";
    var slen = Object.keys(sb).length;
    var boDiv = '<div class="row row-cols-1" id = "services">';
    var bcDiv = '</div>';

    for (i = 1; i <= slen; i++) {

        var s = "sb" + i;

        if (sb[s]["merchant"] == app.dinamicMerc) {




            var tdiv =

                '<div class = "col p-1 w-25 border border-info rounded" id = "' + sb[s]["pay_item_id"] + '" class = "' + s + '" onClick = "dispSubscriptionDetails(\'' + sb[s]["pay_item_id"] + '\')" style="background-color:white;">' +
                pd[p]["name"] +
                '</div>';


            subscriptions += tdiv;
        }


    }
    return boDiv + subscriptions + bcDiv;

};

//display bill information in the view
function dispBillDetails(key) {
    app.dinamicOptionKey = key;
    setView("bills", views["billDetails"]);

};

//display topup information in the view
function dispTopupDetails(key) {
    app.dinamicOptionKey = key;

    setView("topups", views["topupDetails"]);

};

//display product information in the view
function dispProductDetails(key) {
    app.dinamicOptionKey = key;

    setView("products", views["productDetails"]);

};

//display subscription information in the view
function dispSubscriptionDetails(key) {
    app.dinamicOptionKey = key;

    setView("subscription", views["subscriptionDetails"]);

};

//set the item details in the view
function setItemDetails() {
    if (app.dinamicType == "SEARCHABLE_BILL" || app.dinamicType == "NON_SEARCHABLE_BILL") {
        var k = app.dinamicOptionKey;
        app.dinamicPItemId = app.billArray[k]["pItemId"];
        var details =
            '<table class="table table-striped">' +
            '<tbody>' +
            '<tr>' +
            '<td>Amount:</td>' +
            '<td>' + app.billArray[k]["amount"] + '</td>' +
            '</tr>' +
            '<tr>' +
            '<td>Penalty:</td>' +
            '<td>' + app.billArray[k]["penalty"] + '</td>' +
            '</tr>' +
            '<tr>' +
            '<td>Bill Number:</td>' +
            '<td>' + app.billArray[k]["billNum"] + '</td>' +
            '</tr>' +
            '<tr>' +
            '<td>Date: </td>' +
            '<td>' + app.billArray[k]["date"]["date"] + '</td>' +
            '</tr>' +
            '<tr>' +
            '<td>Due date: </td>' +
            '<td>' + app.billArray[k]["dueDate"]["date"] + '</td>' +
            '</tr>' +
            '</tbody>' +
            '</table>' +
            '<a href="#" class="btn btn-block" id = "quote" style="background-color:orange; color:white" onClick = "getQuote(' + app.billArray[k]["amount"] + ', \'' + app.billArray[k]["merchant"] + '\')"> Get a Quote </a>';

        return details;
    }
    else if (app.dinamicType == "TOPUP" || app.dinamicType == "CASHIN") {

        var k = app.dinamicOptionKey;
        app.dinamicPItemId = app.topupArray[k]["pay_item_id"];

        if (app.topupArray[k]["amount_type"] == "FIXED") {

            var details =
                '<table class="table table-striped">' +
                '<tbody>' +
                '<tr>' +
                '<td>Amount:</td>' +
                '<td>' + app.topupArray[k]["amount_local_cur"] + '</td>' +
                '</tr>' +
                '<tr>' +
                '<td>Currency:</td>' +
                '<td>' + app.topupArray[k]["local_cur"] + '</td>' +
                '</tr>' +
                '<tr>' +
                '<td>Offer: </td>' +
                '<td>' + app.topupArray[k]["name"] + '</td>' +
                '</tr>' +
                '<tr>' +
                '<td>Description: </td>' +
                '<td>' + app.topupArray[k]["description"] + '</td>' +
                '</tr>' +
                '</tbody>' +
                '</table>' +
                '<a href="#" class="btn btn-block" id = "quote" style="background-color:orange; color:white" onClick = "getQuote(' + app.topupArray[k]["amount_local_cur"] + ', \'' + app.topupArray[k]["merchant"] + '\')"> Get a Quote </a>';

        } else {
            var details =
                '<div class="form-group">' +
                '<input type="text" class="form-control" name="txt-amount" id="txt-amount" placeholder="Amount" required>' +
                '</div>' +
                '<table class="table table-striped">' +
                '<tbody>' +
                '<tr>' +
                '<td>Currency:</td>' +
                '<td>' + app.topupArray[k]["local_cur"] + '</td>' +
                '</tr>' +
                '<tr>' +
                '<td>Offer: </td>' +
                '<td>' + app.topupArray[k]["name"] + '</td>' +
                '</tr>' +
                '<tr>' +
                '<td>Description: </td>' +
                '<td>' + app.topupArray[k]["description"] + '</td>' +
                '</tr>' +
                '</tbody>' +
                '</table>' +
                '<a href="#" class="btn btn-block" id = "quote" style="background-color:orange; color:white" onClick = "callQuoteMethod()"> Get a Quote </a>';

        }


        return details;
    }

    else if (app.dinamicType == "PRODUCT") {

        var k = app.dinamicOptionKey;
        app.dinamicPItemId = app.productArray[k]["pay_item_id"];

        if (app.productArray[k]["amount_type"] == "FIXED") {

            var details =
                '<table class="table table-striped">' +
                '<tbody>' +
                '<tr>' +
                '<td>Amount:</td>' +
                '<td>' + app.productArray[k]["amount_local_cur"] + '</td>' +
                '</tr>' +
                '<tr>' +
                '<td>Currency:</td>' +
                '<td>' + app.productArray[k]["local_cur"] + '</td>' +
                '</tr>' +
                '<tr>' +
                '<td>Offer: </td>' +
                '<td>' + app.productArray[k]["name"] + '</td>' +
                '</tr>' +
                '<tr>' +
                '<td>Description: </td>' +
                '<td>' + app.productArray[k]["description"] + '</td>' +
                '</tr>' +
                '</tbody>' +
                '</table>' +
                '<a href="#" class="btn btn-block" id = "quote" style="background-color:orange; color:white" onClick = "getQuote(' + app.productArray[k]["amount_local_cur"] + ', \'' + app.productArray[k]["merchant"] + '\')"> Get a Quote </a>';

        } else {

            var details =
                '<div class="form-group">' +
                '<input type="text" class="form-control" name="txt-amount" id="txt-amount" placeholder="Amount" required>' +
                '</div>' +
                '<table class="table table-striped">' +
                '<tbody>' +
                '<tr>' +
                '<td>Currency:</td>' +
                '<td>' + app.productArray[k]["local_cur"] + '</td>' +
                '</tr>' +
                '<tr>' +
                '<td>Offer: </td>' +
                '<td>' + app.productArray[k]["name"] + '</td>' +
                '</tr>' +
                '<tr>' +
                '<td>Description: </td>' +
                '<td>' + app.productArray[k]["description"] + '</td>' +
                '</tr>' +
                '</tbody>' +
                '</table>' +
                '<a href="#" class="btn btn-block" id = "quote" style="background-color:orange; color:white" onClick = "callQuoteMethod()"> Get a Quote </a>';

        }


        return details;
    }
    else if (app.dinamicType == "SUBSCRIPTION") {

        var k = app.dinamicOptionKey;
        app.dinamicPItemId = app.subscriptionArray[k]["pay_item_id"];

        if (app.subscriptionArray[k]["amount_type"] == "FIXED") {

            var details =
                '<table class="table table-striped">' +
                '<tbody>' +
                '<tr>' +
                '<td>Amount:</td>' +
                '<td>' + app.subscriptionArray[k]["amount_local_cur"] + '</td>' +
                '</tr>' +
                '<tr>' +
                '<td>Currency:</td>' +
                '<td>' + app.subscriptionArray[k]["local_cur"] + '</td>' +
                '</tr>' +
                '<tr>' +
                '<td>Offer: </td>' +
                '<td>' + app.subscriptionArray[k]["name"] + '</td>' +
                '</tr>' +
                '<tr>' +
                '<td>Due Date: </td>' +
                '<td>' + app.subscription[k]["due_date"]["date"] + '</td>' +
                '</tr>' +
                '</tbody>' +
                '</table>' +
                '<a href="#" class="btn btn-block" id = "quote" style="background-color:orange; color:white" onClick = "getQuote(' + app.subscriptionArray[k]["amount_local_cur"] + ', \'' + app.subscriptionArray[k]["merchant"] + '\')"> Get a Quote </a>';

        } else {

            var details =
                '<div class="form-group">' +
                '<input type="text" class="form-control" name="txt-amount" id="txt-amount" placeholder="Amount" required>' +
                '</div>' +
                '<table class="table table-striped">' +
                '<tbody>' +
                '<tr>' +
                '<td>Currency:</td>' +
                '<td>' + app.productArray[k]["local_cur"] + '</td>' +
                '</tr>' +
                '<tr>' +
                '<td>Offer: </td>' +
                '<td>' + app.productArray[k]["name"] + '</td>' +
                '</tr>' +
                '<tr>' +
                '<td>Description: </td>' +
                '<td>' + app.productArray[k]["description"] + '</td>' +
                '</tr>' +
                '</tbody>' +
                '</table>' +
                '<a href="#" class="btn btn-block" id = "quote" style="background-color:orange; color:white" onClick = "callQuoteMethod()"> Get a Quote </a>';

        }


        return details;
    }

};

//call the getQuote Method
function callQuoteMethod() {

    if (app.dinamicType == "TOPUP" || app.dinamicType == "CASHIN") {
        var k = app.dinamicOptionKey;
        var amount = $("#txt-amount").val();
        getQuote(amount, app.topupArray[k]["merchant"]);
    }
    else if (app.dinamicType == "TOPUP" || app.dinamicType == "CASHIN") {
        var k = app.dinamicOptionKey;
        var amount = $("#txt-amount").val();
        getQuote(amount, app.productArray[k]["merchant"]);
    }

};

//get a quote for a given payment item id(iId)
function getQuote(iAmt, mer) {

    setView("quote", views['spinner']);

    path = "/s3papi/quote";

    const options = {
        method: 'post',
        data: {
            amount: iAmt,
            merchant: mer,
            pItemId: app.dinamicPItemId,
            //custPhone: $("#txt-phone-number").val(),
            //custName: $("#txt-customer-name").val()
        },
        //headers: { Authorization: 'OAuth2: token' }
    };

    cordova.plugin.http.sendRequest(app.baseUrl + path, options, function (response) {
        // prints 200
        //console.log(response.status);
        var qt = JSON.parse(response.data);


        //quote object array
        app.quote = new quote.Quote(
            qt["qId"],
            qt["payItemId"],
            qt["expires"],
            qt["amount"],
            qt["price"],
            qt["localCur"],
            qt["promotion"]
        );


        setView("mainDiv", views["quoteView"]);

    }, function (response) {
        // prints 403
        console.log(response.status);
        setView("quote", "Get a Quote");
        //prints Permission denied
        console.log(response.error);
        setView("quote", "Get a Quote");
    });
};

//set the quote information in the view
function setQDetails() {

    var q = app.quote;
    var crumb;
    if (app.dinamicType == "SEARCHABLE_BILL" || app.dinamicType == "NON_SEARCHABLE_BILL") {
        crumb = views['breadCrumbBQuote'];
    } else if (app.dinamicType == "TOPUP" || app.dinamicType == "CASHIN") {
        crumb = views['breadCrumbTQuote'];
    } else if (app.dinamicType == "PRODUCT") {
        crumb = views['breadCrumbPQuote'];
    }
    var details =
        crumb +
        '<table class="table table-striped">' +
        '<tbody>' +
        '<tr>' +
        '<td>Amount:</td>' +
        '<td>' + q["amount"] + '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>Price:</td>' +
        '<td>' + q["price"] + '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>Expires:</td>' +
        '<td>' + q["expires"]["date"] + '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>Pay Item ID: </td>' +
        '<td>' + q["pItemId"] + '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>Currency: </td>' +
        '<td>' + q["localCur"] + '</td>' +
        '</tr>' +
        '</tbody>' +
        '</table>' +
        '<a href="#" class="btn btn-block" id = "Processpayment" style="background-color:orange; color:white" onClick = "setView(\'mainDiv\', views[\'paymentMethod\'])"> Make Payment </a>';

    return details;
};

//set the payment view
function setPaymentView() {

    var v =
        '<nav aria-label="breadcrumb">' +
        '<ol class="breadcrumb">' +
        '<li class="breadcrumb-item"><a href="#" onClick="setView(\'mainDiv\', views[\'home\'])">Home</a></li>' +
        '<li class="breadcrumb-item" aria-current="page" onClick="setView(\'mainDiv\', views[\'quoteView\'])">Quote</li>' +
        '<li class="breadcrumb-item active" aria-current="page" onClick="setView(\'mainDiv\', views[\'paymentMethod\'])">Payment</li>' +
        '</ol>' +
        '</nav>' +
        '<form class="form">' +
        '<h4 class="mb-2 col-12" >Payment details</h4>' +
        '<div class=" form-group row" >' +
        '<label class="col" for="smobilpay_cash" data-toggle="collapse" data-target="#optionData" title="Smobilpay Cash">' +
        '<input class="col-1" type="radio" class="form-control" id="smobilpay_cash" name="payment" value="smobilpay" onclick="othersAction()">' +
        '<img class="img-fluid" alt="SmobilPay Cash" src="../img/smobilpay.png">' +
        '</label>' +
        '</div>' +
        '<div class="form-group row mb-3">' +
        '<label class="col" for="mtn" data-toggle="collapse" data-target="#optionData" title="MTN">' +
        '<input class="col-1" type="radio" class="form-control" id="mtn" name="payment" value="mtn" onclick="othersAction()">' +
        '<img class="img-fluid" alt="MTN MoMo" src="../img/MTNMOMO.png">' +
        '</label>' +
        '</div>' +

        '<div class="form-group row  mb-3">' +
        '<label class="col" for="orange" data-toggle="collapse" data-target="#optionData" title="Orange" onclick="orangeAction()">' +
        '<input class="col-1" type="radio" class="form-control" id="orange" name="payment">' +
        '<img class="img-fluid" alt="Orange Money" src="../img/orangemoney.png">' +
        '</label>' +
        '</div>' +

        '<div class="form-group row  mb-3">' +
        '<label class="col" for="expressunion" data-toggle="collapse" data-target="#optionData" title="Express Union">' +
        '<input class="col-1" type="radio" class="form-control" id="expressunion" name="payment" onclick="othersAction()">' +
        '<img class="img-fluid" alt="Express Union" src="../img/expressunion.png">' +
        '</label>' +
        '</div>' +

        '<div class="collapse" id="optionData">' +
        '<div class="card card-body">' +
        '<div class="row">' +
        '<span class="col-12  invisible" id="smobilpaySpan" name="decription">Pay cash to any Smobilpay™ agent</span>' +
        '<span class="col-12 invisible" id="mtnSpan" name="decription">Pay with your MTN Mobile Money account</span>' +
        '<span class="col-12 invisible" id="orangeSpan" >Pay with your Orange Money account</span>' +
        '<span class="col-12 invisible" id="expressSpan">Pay with your Express Union Mobile account</span>' +
        '<div>' +
        '<div class="form-group col-xs-12 col-md-6  mb-3">' +
        '<label for="opt_first_name">Your name</label>' +
        '<input class="form-control" id="opt_first_name" name="opt_first_name" type="text" placeholder="Your name" value="' + app.user['uname'] + '" required">' +
        '</div>' +
        '<div class="form-group col-xs-12 col-md-6  mb-3">' +
        '<label for="countryCode">Mobile Number:</label>' +
        '<div class="row">' +
        '<div class="col-xs-12 col-md-4">' +
        '<select name="countryCode" id="countryCode">' +
        '<option selected value="237">+237</option>' +
        '</select>' +
        '</div>' +
        '<div class="col-xs-12 col-md-8">' +
        '<input class="form-control" name="opt_phone_number" id="opt_phone_number" type="text" placeholder="e.g. 6########" value="' + app.user['phone'] + '" required>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="invisible form-group  mb-3" id="otp" >' +
        '<label for="opt_one_time_password">OTP</label>' +
        '<input class="form-control" id="opt_one_time_password" name="opt_one_time_password" type="text"  placeholder="Your OTP is obtained by dialing: #150*4*4# on your phone" required>' +
        '</div>' +
        '</div>' +
        '<a href="#" class="btn btn-block  mb-3" style="background-color:orange; color:white" id = "submitPayment" onClick="processPayment()"> Submit </a>' +
        '</div>' +
        '</form>';

    return v;
};

//make payment
function processPayment() {

    setView("submitPayment", views["spinner"]);
    var optID = $("input[name='payment']:checked").attr("id");
    var custoName = $("#opt_first_name").val();
    var custoPhone = $("#opt_phone_number").val();
    var custoOtp = $("input[name='payment']:checked").attr("id") == "orange" ? $("#opt_one_time_password").val() : "";
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + 'T' + time;
    var q = app.quote;
    //var status = "";
    var limit = app.limit;
    //var s = app.services;

    path = "/s3papi/order";
    const options = {
        method: 'post',
        data: {
            'currency': q['localCur'],
            'customerName': custoName,
            'description': app.dinamicMerc,
            'email': 'jstar.divinio@gmail.com',
            'expiryDate': dateTime,
            'uuid': app.name,
            'version': app.version,
            'itemId': q['pItemId'],
            'quantity': 1,
            'subTotal': q['amount'],
            'unitCost': q['amount'],
            'langKey': 'en',
            'merchantReference': q['qId'],
            'orderDate': dateTime,
            'phoneNumber': custoPhone,
            'receiptUrl': '',
            'totalAmount': q['price'],
            'serviceId': app.dinamicSId,
            'serviceNumber': app.dinamicSNumber,
            'optionID': optID,
            'otp': custoOtp
        },
        //headers: { Authorization: 'OAuth2: token' }
    };

    cordova.plugin.http.sendRequest(app.baseUrl + path, options, function (response) {
        // prints 200
        //console.log(response.status);
        var resp = JSON.parse(response.data);
        app.dinamicOrderId = resp.orderTxnId;
        
        if (resp.subStat == "submited") {

            navigator.notification.confirm(
                'Check payment status', // message
                 checkPaymentStat,            // callback to invoke with index of button pressed
                'Status',           // title
                ['Check','Stop']     // buttonLabels
            );
            
          


        }

    }, function (response) {
        // prints 403
        alert(response.status);
        setView("submitPayment", "Submit");
        //prints Permission denied
        alert(response.error);
        setView("submitPayment", "Submit");
    });
};

//check enkap payment status
function checkPaymentStat(option){

    if(option == 2){

        navigator.notification.alert(
            'Process Halted ',  // message
            '',         // callback
            'Alert',            // title
            'ok'                  // buttonName
        );
        setView('mainDiv', views['home']);
    } 
    else if(option == 1){
        //alert(status);
    
            path = "/s3papi/orderstatus";
            queryParam = "?txnid=" + app.quote['qId'] + "&orderid=" +  app.dinamicOrderId;

            cordova.plugin.http.get(
                app.baseUrl + path + queryParam,
                '',
                '',
                function (response) {
                    // prints 200
                    //alert(response.status);
                    var status = JSON.parse(response.data);
                    if (status == "CONFIRMED") {
                        //make paymnent collection
                        collection();
                    }else if (status == "FAILED") {
                        alert("Payment Failed");
                        setView("submitPayment", "Submit");
                    }else if(status =="CREATED" || status == "INITIALISED" || status == "IN_PROGRESS"){

                        navigator.notification.confirm(
                            'Check payment status', // message
                             checkPaymentStat,            // callback to invoke with index of button pressed
                            'Check Status',           // title
                            ['Check','Stop']     // buttonLabels
                        );
                    }

                },
                function (response) {
                    // prints 403
                    alert(response.status);
                    //prints Permission denied
                    alert(response.error);
                    setView("submitPayment", "Submit");
                    return false;
                });


        

    }

};
//smobilpay payment collection
function collection() {

    var q = app.quote;
    //set path for collection endpoint
    path = "/s3papi/billcollection";

    const options = {
        method: 'post',
        data: {
            'quoteId': q['qId'],
            'merchantCode': app.dinamicMerc,
            'serviceId': app.dinamicSId,
            'serviceNumber': app.dinamicSNumber,
            'usrPhone': '678289617',
            'usrEmail': 'jstar.divinio@gmail.com'
        },
        //headers: { Authorization: 'OAuth2: token' }
    };

    cordova.plugin.http.sendRequest(app.baseUrl + path, options,
        function (response) {
            // prints 200
            //alert(response.status);
            var resp = JSON.parse(response.data);
            if (resp['historyStatus'] == "SUCCESS") {
                setView("submitPayment", "Submit");
                alert("Payment Successfull"); 
                setView('mainDiv', views['home']);
            }

        },
        function (response) {
            // prints 403
            //alert(response.status);

            //prints Permission denied
            alert(response.error);
            setView("submitLogin", "Submit");
        });
};
//wait for a specific number of miliseconds
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
};

function orangeAction() {
    $("#orangeSpan").attr("class", "visible");
    $("#mtnSpan").attr("class", "invisible");
    $("#expressSpan").attr("class", "invisible");
    $("#smobilpaySpan").attr("class", "invisible");

    $("#otp").attr("class", "visible");

};

function othersAction() {
    $("#otp").attr("class", "invisible");
    var radioId = $("input[name='payment']:checked").attr("id");

    switch (radioId) {
        case "smobilpay_cash":
            $("#smobilpaySpan").attr("class", "visible");
            $("#expressSpan").attr("class", "invisible");
            $("#mtnSpan").attr("class", "invisible");
            $("#orangeSpan").attr("class", "invisible");
            break;

        case "mtn":
            $("#mtnSpan").attr("class", "visible");
            $("#expressSpan").attr("class", "invisible");
            $("#smobilpaySpan").attr("class", "invisible");
            $("#orangeSpan").attr("class", "invisible");
            break;

        case "expressunion":
            $("#expressSpan").attr("class", "visible");
            $("#mtnSpan").attr("class", "invisible");
            $("#smobilpaySpan").attr("class", "invisible");
            $("#orangeSpan").attr("class", "invisible");
            break;

        default:

    }



};

//object containing all the IU views
var views = {
    //spinner
    "spinner": '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>',

    //bill view Query
    "billViewQuery":
        '<nav aria-label="breadcrumb">' +
        '<ol class="breadcrumb">' +
        '<li class="breadcrumb-item"><a href="#" onClick="setView(\'mainDiv\', views[\'home\'])">Home</a></li>' +
        '<li class="breadcrumb-item active" aria-current="page" onClick="setView(\'mainDiv\', views[\'billViewQuery\'])">Service</li>' +
        '</ol>' +
        '</nav>' +
        '<div class =" row justify-content-center align-items-center mt-5">' +
        '<form name="billData" id = "billData">' +

        '<script>' +

        '$("#billData").html(serviceNumberform())' +

        '</script>' +

        '</form>' +
        '</div><!-- /content -->',

    //topup view Query
    "topupViewQuery":
        '<nav aria-label="breadcrumb">' +
        '<ol class="breadcrumb">' +
        '<li class="breadcrumb-item"><a href="#" onClick="setView(\'mainDiv\', views[\'home\'])">Home</a></li>' +
        '<li class="breadcrumb-item active" aria-current="page" onClick="setView(\'mainDiv\', views[\'topupViewQuery\'])">Service</li>' +
        '</ol>' +
        '</nav>' +
        '<div class =" row justify-content-center align-items-center mt-5">' +
        '<form name="topupData" id = "topupData">' +

        '<script>' +

        '$("#topupData").html(serviceNumberform())' +

        '</script>' +

        '</form>' +
        '</div><!-- /content -->',

    //product view Query
    "productViewQuery":
        '<nav aria-label="breadcrumb">' +
        '<ol class="breadcrumb">' +
        '<li class="breadcrumb-item"><a href="#" onClick="setView(\'mainDiv\', views[\'home\'])">Home</a></li>' +
        '<li class="breadcrumb-item active" aria-current="page" onClick="setView(\'mainDiv\', views[\'productViewQuery\'])">Service</li>' +
        '</ol>' +
        '</nav>' +
        '<div class =" row justify-content-center align-items-center mt-5">' +
        '<form name="topupData" id = "topupData">' +

        '<script>' +

        '$("#topupData").html(serviceNumberform())' +

        '</script>' +

        '</form>' +
        '</div><!-- /content -->',

    //bills
    "bills":
        '<nav aria-label="breadcrumb">' +
        '<ol class="breadcrumb">' +
        '<li class="breadcrumb-item"><a href="#" onClick="setView(\'mainDiv\', views[\'home\'])">Home</a></li>' +
        '<li class="breadcrumb-item active" aria-current="page" onClick="setView(\'mainDiv\', views[\'billViewQuery\'])">Service</li>' +
        '</ol>' +
        '</nav>' +
        '<div class ="container-fluid row justify-content-center align-items-top" id ="bills">' +
        '<script>' +
        '$("#bills").html(displayBills(app.bills))' +
        '</script>' +
        '</div>',

    //topups
    "topups":
        '<nav aria-label="breadcrumb">' +
        '<ol class="breadcrumb">' +
        '<li class="breadcrumb-item"><a href="#" onClick="setView(\'mainDiv\', views[\'home\'])">Home</a></li>' +
        '<li class="breadcrumb-item active" aria-current="page" onClick="setView(\'mainDiv\', views[\'topupViewQuery\'])">Service</li>' +
        '</ol>' +
        '</nav>' +
        '<div class ="container-fluid row justify-content-center align-items-top" id ="topups">' +
        '<script>' +
        '$("#topups").html(displayTopups(app.topups))' +
        '</script>' +
        '</div>',

    //products
    "products":
        '<nav aria-label="breadcrumb">' +
        '<ol class="breadcrumb">' +
        '<li class="breadcrumb-item"><a href="#" onClick="setView(\'mainDiv\', views[\'home\'])">Home</a></li>' +
        '<li class="breadcrumb-item active" aria-current="page" onClick="setView(\'mainDiv\', views[\'productViewQuery\'])">Service</li>' +
        '</ol>' +
        '</nav>' +
        '<div class ="container-fluid row justify-content-center align-items-top" id ="products">' +
        '<script>' +
        '$("#products").html(displayProducts(app.products))' +
        '</script>' +
        '</div>',

    //subscriptions
    "subscriptions":
    '<nav aria-label="breadcrumb">' +
    '<ol class="breadcrumb">' +
    '<li class="breadcrumb-item"><a href="#" onClick="setView(\'mainDiv\', views[\'home\'])">Home</a></li>' +
    '<li class="breadcrumb-item active" aria-current="page" onClick="setView(\'mainDiv\', views[\'productViewQuery\'])">Service</li>' +
    '</ol>' +
    '</nav>' +
    '<div class ="container-fluid row justify-content-center align-items-top" id ="subscriptions">' +
    '<script>' +
    '$("#subscriptions").html(displaySubscriptions(app.subscriptionss))' +
    '</script>' +
    '</div>',

    //bill details
    "billDetails":
        '<nav aria-label="breadcrumb">' +
        '<ol class="breadcrumb">' +
        '<li class="breadcrumb-item"><a href="#" onClick="setView(\'mainDiv\', views[\'home\'])">Home</a></li>' +
        '<li class="breadcrumb-item" aria-current="page" onClick="setView(\'mainDiv\', views[\'billViewQuery\'])">Service</li>' +
        '<li class="breadcrumb-item active" aria-current="page" onClick="setView(\'mainDiv\', views[\'billDetails\'])">Details</li>' +
        '</ol>' +
        '</nav>' +
        '<div class ="container-fluid row justify-content-center align-items-top" id ="details">' +
        '<script>' +
        '$("#details").html(setItemDetails())' +
        '</script>' +
        '</div>',

    //topup details
    "topupDetails":
        '<nav aria-label="breadcrumb">' +
        '<ol class="breadcrumb">' +
        '<li class="breadcrumb-item"><a href="#" onClick="setView(\'mainDiv\', views[\'home\'])">Home</a></li>' +
        '<li class="breadcrumb-item" aria-current="page" onClick="setView(\'mainDiv\', views[\'topupViewQuery\'])">Service</li>' +
        '<li class="breadcrumb-item active" aria-current="page" onClick="setView(\'mainDiv\', views[\'topupDetails\'])">Details</li>' +
        '</ol>' +
        '</nav>' +
        '<div class ="container-fluid row justify-content-center align-items-top" id ="details">' +
        '<script>' +
        '$("#details").html(setItemDetails())' +
        '</script>' +
        '</div>',

    //product details
    "productDetails":
        '<nav aria-label="breadcrumb">' +
        '<ol class="breadcrumb">' +
        '<li class="breadcrumb-item"><a href="#" onClick="setView(\'mainDiv\', views[\'home\'])">Home</a></li>' +
        '<li class="breadcrumb-item" aria-current="page" onClick="setView(\'mainDiv\', views[\'productViewQuery\'])">Service</li>' +
        '<li class="breadcrumb-item active" aria-current="page" onClick="setView(\'mainDiv\', views[\'productDetails\'])">Details</li>' +
        '</ol>' +
        '</nav>' +
        '<div class ="container-fluid row justify-content-center align-items-top" id ="details">' +
        '<script>' +
        '$("#details").html(setItemDetails())' +
        '</script>' +
        '</div>',

        //subscription details
    "subscriptionDetails":
    '<nav aria-label="breadcrumb">' +
    '<ol class="breadcrumb">' +
    '<li class="breadcrumb-item"><a href="#" onClick="setView(\'mainDiv\', views[\'home\'])">Home</a></li>' +
    '<li class="breadcrumb-item" aria-current="page" onClick="setView(\'mainDiv\', views[\'productViewQuery\'])">Service</li>' +
    '<li class="breadcrumb-item active" aria-current="page" onClick="setView(\'mainDiv\', views[\'subscriptionDetails\'])">Details</li>' +
    '</ol>' +
    '</nav>' +
    '<div class ="container-fluid row justify-content-center align-items-top" id ="details">' +
    '<script>' +
    '$("#details").html(setItemDetails())' +
    '</script>' +
    '</div>',

    //quote view
    "quoteView":
        '<div class ="container-fluid row justify-content-center align-items-top" id ="quoteView">' +
        '<script>' +
        '$("#mainDiv").html(setQDetails())' +
        '</script>' +
        '</div>',

    //home page
    "home":
        '<!--Nav Bar-->' +
        '<nav class="navbar navbar-expand-lg navbar-dark " style="background-color: orange">' +
        '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">' +
        '<span class="navbar-toggler-icon"></span>' +
        '</button>' +
        '<div class="collapse navbar-collapse" id="navbarTogglerDemo01">' +

        '<ul class="navbar-nav mr-auto mt-2 mt-lg-0">' +
        '<li class="nav-item active">' +
        '<a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>' +
        '</li>' +
        '<li class="nav-item">' +
        '<a class="nav-link" href="#">Link</a>' +
        '</li>' +
        '<li class="nav-item">' +
        '<a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>' +
        '</li>' +
        '</ul>' +
        '<form class="form-inline my-2 my-lg-0">' +
        '<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">' +
        '<button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>' +
        '</form>' +
        '</div>' +
        '<a class="navbar-brand" href="#">Collections</a>' +
        '</nav>' +

        '<!--Nav Tabs-->' +
        '<ul class="nav nav-tabs" id="myTab" role="tablist" style="background-color: orange" >' +
        '<li class="nav-item">' +
        '<a class="nav-link active text-dark" id="all-tab" data-toggle="tab" href="#all" role="tab" aria-controls="all" aria-selected="true" >All</a>' +
        '</li>' +
        '<li class="nav-item">' +
        '<a class="nav-link text-dark" id="grouped-tab" data-toggle="tab" href="#grouped" role="tab" aria-controls="grouped" aria-selected="false">Grouped</a>' +
        '</li>' +
        '</ul>' +


        '<div class="tab-content" id="myTabContent">' +

        '<div class="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="home-tab">' +
        '<div class="container" id="allData">' +
        '<script>' +

        '$("#allData").html(displayServices(app.services))' +

        '</script>' +
        '</div>' +
        '</div>' +
        '<div class="tab-pane fade" id="grouped" role="tabpanel" aria-labelledby="grouped-tab">' +
        '<div class="container" id="groupedData">' +
        '<script>' +

        '$("#groupedData").html(displayServicesByCathegory(app.services))' +

        '</script>' +
        '</div>' +
        '</div>' +
        '</div>',

    //sign up page
    "signUp":
        '<div class ="row justify-content-center align-items-top">' +

        '<h4 style="color:orange"><b>SmartSales</b></h4>' +

        '</div><!-- /header -->' +

        '<div class =" row justify-content-center align-items-center mt-5">' +
        '<form name="signUpForm">' +
        '<div class="form-group">' +
        '<input type="text" class="form-control" name="txt-first-name" id="txt-first-name" placeholder="First Name" required>' +
        '</div>' +

        '<div class="form-group">' +
        '<input type="text" class="form-control" name="txt-last-name" id="txt-last-name" placeholder="Last Name" required>' +
        '</div>' +

        '<div class="form-group">' +
        '<input type="text" class="form-control" name="txt-user-name" id="txt-user-name" placeholder="User Name" required>' +
        '</div>' +

        '<div class="form-group">' +
        '<input type="text" class="form-control" name="txt-phone" id="txt-phone" placeholder="Phone number" required>' +
        '</div>' +

        '<div class="form-group">' +
        '<input type="email" class="form-control" name="txt-email" id="txt-email" placeholder="Email Address" required>' +
        '</div>' +

        '<div class="form-group">' +
        '<input type="password" class="form-control" name="txt-password" id="txt-password" placeholder="Password" required>' +
        '</div>' +

        '<div class="form-group">' +
        '<input type="password" class="form-control" name="txt-password-confirm" id="txt-password-confirm" placeholder="Confirm Password" required>' +
        '</div>' +

        '<a href="#" class="btn btn-warning btn-block" id = "submitRegister" onClick ="processRegistration()"> Sign Up </a>' +

        '<div class="form-group">' +
        '<label>Or <a href="index.html">Login</a></label>' +
        '</div>' +
        '</form>' +
        '</div><!-- /content -->',

    //login page
    "login":
        '<div class ="row justify-content-center align-items-top">' +

        '<h4 style="color:orange"><b>SmartSales</b></h4>' +

        '</div><!-- /header -->' +

        '<div class =" row justify-content-center align-items-center mt-5">' +
        '<form name="singInDiv">' +
        '<div class="form-group">' +
        '<label for="txt-uname">User name</label>' +
        '<input type="text" class="form-control" id="txt-uname">' +
        '</div>' +
        '<div class="form-group">' +
        '<label for="txt-Password1">Password</label>' +
        '<input type="password" class="form-control" id="txt-password">' +
        '</div>' +

        '<a href="#" class="btn btn-block" style="background-color:orange; color:white" id = "submitLogin" onClick="testPing(\'login\')"> Submit </a>' +

        '<div class="form-group">' +
        '<label>Or <a href="#" id ="signUpPage" onClick="displayRegPage()">Register</a></label>' +
        '</div>' +
        '</form>',

    //Select payment method view
    "paymentMethod":
        
        '<script>' +
        '$("#mainDiv").html(setPaymentView())' +
        '</script>',

    //breadcrumb views//
    "breadCrumbHome":
        '<nav aria-label="breadcrumb">' +
        '<ol class="breadcrumb">' +
        '<li class="breadcrumb-item active" aria-current="page" onClick="setView(\'mainDiv\', views[\'home\'])">Home</li>' +
        '</ol>' +
        '</nav>',

    "breadCrumbBService":
        '<nav aria-label="breadcrumb">' +
        '<ol class="breadcrumb">' +
        '<li class="breadcrumb-item"><a href="#" onClick="setView(\'mainDiv\', views[\'home\'])">Home</a></li>' +
        '<li class="breadcrumb-item active" aria-current="page" onClick="setView(\'mainDiv\', views[\'billViewQuery\'])">Service</li>' +
        '</ol>' +
        '</nav>',

    "breadCrumbTService":
        '<nav aria-label="breadcrumb">' +
        '<ol class="breadcrumb">' +
        '<li class="breadcrumb-item"><a href="#" onClick="setView(\'mainDiv\', views[\'home\'])">Home</a></li>' +
        '<li class="breadcrumb-item active" aria-current="page" onClick="setView(\'mainDiv\', views[\'topupViewQuery\'])">Service</li>' +
        '</ol>' +
        '</nav>',

    "breadCrumbPService":
        '<nav aria-label="breadcrumb">' +
        '<ol class="breadcrumb">' +
        '<li class="breadcrumb-item"><a href="#" onClick="setView(\'mainDiv\', views[\'home\'])">Home</a></li>' +
        '<li class="breadcrumb-item active" aria-current="page" onClick="setView(\'mainDiv\', views[\'productViewQuery\'])">Service</li>' +
        '</ol>' +
        '</nav>',

    "breadCrumbBDetails":
        '<nav aria-label="breadcrumb">' +
        '<ol class="breadcrumb">' +
        '<li class="breadcrumb-item"><a href="#" onClick="setView(\'mainDiv\', views[\'home\'])">Home</a></li>' +
        '<li class="breadcrumb-item" aria-current="page" onClick="setView(\'mainDiv\', views[\'billViewQuery\'])">Service</li>' +
        '<li class="breadcrumb-item active" aria-current="page" onClick="setView(\'mainDiv\', views[\'billDetails\'])">Details</li>' +
        '</ol>' +
        '</nav>',

    "breadCrumbTDetails":
        '<nav aria-label="breadcrumb">' +
        '<ol class="breadcrumb">' +
        '<li class="breadcrumb-item"><a href="#" onClick="setView(\'mainDiv\', views[\'home\'])">Home</a></li>' +
        '<li class="breadcrumb-item" aria-current="page" onClick="setView(\'mainDiv\', views[\'topupViewQuery\'])">Service</li>' +
        '<li class="breadcrumb-item active" aria-current="page" onClick="setView(\'mainDiv\', views[\'topupDetails\'])">Details</li>' +
        '</ol>' +
        '</nav>',

    "breadCrumbPDetails":
        '<nav aria-label="breadcrumb">' +
        '<ol class="breadcrumb">' +
        '<li class="breadcrumb-item"><a href="#" onClick="setView(\'mainDiv\', views[\'home\'])">Home</a></li>' +
        '<li class="breadcrumb-item" aria-current="page" onClick="setView(\'mainDiv\', views[\'productViewQuery\'])">Service</li>' +
        '<li class="breadcrumb-item active" aria-current="page" onClick="setView(\'mainDiv\', views[\'productDetails\'])">Details</li>' +
        '</ol>' +
        '</nav>',

    "breadCrumbBQuote":
        '<nav aria-label="breadcrumb">' +
        '<ol class="breadcrumb">' +
        '<li class="breadcrumb-item"><a href="#" onClick="setView(\'mainDiv\', views[\'home\'])">Home</a></li>' +
        '<li class="breadcrumb-item" aria-current="page" onClick="setView(\'mainDiv\', views[\'billViewQuery\'])">Service</li>' +
        '<li class="breadcrumb-item" aria-current="page" onClick="setView(\'mainDiv\', views[\'billDetails\'])">Details</li>' +
        '<li class="breadcrumb-item active" aria-current="page" onClick="setView(\'mainDiv\', views[\'quoteView\'])">Quote</li>' +
        '</ol>' +
        '</nav>',

    "breadCrumbTQuote":
        '<nav aria-label="breadcrumb">' +
        '<ol class="breadcrumb">' +
        '<li class="breadcrumb-item"><a href="#" onClick="setView(\'mainDiv\', views[\'home\'])">Home</a></li>' +
        '<li class="breadcrumb-item" aria-current="page" onClick="setView(\'mainDiv\', views[\'topupViewQuery\'])">Service</li>' +
        '<li class="breadcrumb-item" aria-current="page" onClick="setView(\'mainDiv\', views[\'topupDetails\'])">Details</li>' +
        '<li class="breadcrumb-item active" aria-current="page" onClick="setView(\'mainDiv\', views[\'quoteView\'])">Quote</li>' +
        '</ol>' +
        '</nav>',

    "breadCrumbPQuote":
        '<nav aria-label="breadcrumb">' +
        '<ol class="breadcrumb">' +
        '<li class="breadcrumb-item"><a href="#" onClick="setView(\'mainDiv\', views[\'home\'])">Home</a></li>' +
        '<li class="breadcrumb-item" aria-current="page" onClick="setView(\'mainDiv\', views[\'productViewQuery\'])">Service</li>' +
        '<li class="breadcrumb-item" aria-current="page" onClick="setView(\'mainDiv\', views[\'productDetails\'])">Details</li>' +
        '<li class="breadcrumb-item active" aria-current="page" onClick="setView(\'mainDiv\', views[\'quoteView\'])">Quote</li>' +
        '</ol>' +
        '</nav>',

    "breadCrumbPayment":
        '<nav aria-label="breadcrumb">' +
        '<ol class="breadcrumb">' +
        '<li class="breadcrumb-item"><a href="#" onClick="setView(\'mainDiv\', views[\'home\'])">Home</a></li>' +
        '<li class="breadcrumb-item" aria-current="page" onClick="setView(\'mainDiv\', views[\'quoteView\'])">Quote</li>' +
        '<li class="breadcrumb-item active" aria-current="page" onClick="setView(\'mainDiv\', views[\'paymentMethod\'])">Payment</li>' +
        '</ol>' +
        '</nav>',

};
//app.dinamicSId
