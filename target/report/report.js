$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 2,
  "name": "Login Scenarios",
  "description": "This cases is for Login feature which is every case will started with Background first.",
  "id": "login-scenarios",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.before({
  "duration": 2956731600,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User open the URL",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user type \"https://www.saucedemo.com/\" in address bar",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Sauce Demo web will displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.saucedemo.com/",
      "offset": 11
    }
  ],
  "location": "BackgroundLoginStep.userTypeInAddressBar(String)"
});
formatter.result({
  "duration": 1404300200,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundLoginStep.sauceDemoWebWillDisplayed()"
});
formatter.result({
  "duration": 43280100,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "TC001 - User login with correct credential",
  "description": "",
  "id": "login-scenarios;tc001---user-login-with-correct-credential",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@TC001"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "user input username \"standard_user\"",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "user input password \"secret_sauce\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user click Login button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user redirected to \"PRODUCTS\" page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 21
    }
  ],
  "location": "LoginStep.userInputUsername(String)"
});
formatter.result({
  "duration": 107740400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 21
    }
  ],
  "location": "LoginStep.userInputPassword(String)"
});
formatter.result({
  "duration": 101988300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.userClickLoginButton()"
});
formatter.result({
  "duration": 102100100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PRODUCTS",
      "offset": 20
    }
  ],
  "location": "LoginStep.userRedirectedToProductPage(String)"
});
formatter.result({
  "duration": 26297500,
  "status": "passed"
});
formatter.after({
  "duration": 633242200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "TC002 - User login with incorrect credentials",
  "description": "",
  "id": "login-scenarios;tc002---user-login-with-incorrect-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@TC002"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "user input username \"\u003cusername\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "user input password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user click Login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "warning message appear \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "login-scenarios;tc002---user-login-with-incorrect-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "message"
      ],
      "line": 23,
      "id": "login-scenarios;tc002---user-login-with-incorrect-credentials;;1"
    },
    {
      "cells": [
        "",
        "",
        "Epic sadface: Username is required"
      ],
      "line": 24,
      "id": "login-scenarios;tc002---user-login-with-incorrect-credentials;;2"
    },
    {
      "cells": [
        "standard_user",
        "",
        "Epic sadface: Password is required"
      ],
      "line": 25,
      "id": "login-scenarios;tc002---user-login-with-incorrect-credentials;;3"
    },
    {
      "cells": [
        "",
        "secret_sauce",
        "Epic sadface: Username is required"
      ],
      "line": 26,
      "id": "login-scenarios;tc002---user-login-with-incorrect-credentials;;4"
    },
    {
      "cells": [
        "standarduser",
        "secretsauce",
        "Epic sadface: Username and password do not match any user in this service"
      ],
      "line": 27,
      "id": "login-scenarios;tc002---user-login-with-incorrect-credentials;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1102909500,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User open the URL",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user type \"https://www.saucedemo.com/\" in address bar",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Sauce Demo web will displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.saucedemo.com/",
      "offset": 11
    }
  ],
  "location": "BackgroundLoginStep.userTypeInAddressBar(String)"
});
formatter.result({
  "duration": 1189513500,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundLoginStep.sauceDemoWebWillDisplayed()"
});
formatter.result({
  "duration": 35560100,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "TC002 - User login with incorrect credentials",
  "description": "",
  "id": "login-scenarios;tc002---user-login-with-incorrect-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 16,
      "name": "@TC002"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "user input username \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "user input password \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user click Login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "warning message appear \"Epic sadface: Username is required\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 21
    }
  ],
  "location": "LoginStep.userInputUsername(String)"
});
formatter.result({
  "duration": 87805400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 21
    }
  ],
  "location": "LoginStep.userInputPassword(String)"
});
formatter.result({
  "duration": 79247300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.userClickLoginButton()"
});
formatter.result({
  "duration": 54803200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Epic sadface: Username is required",
      "offset": 24
    }
  ],
  "location": "LoginStep.warningMessageAppear(String)"
});
formatter.result({
  "duration": 26070600,
  "status": "passed"
});
formatter.after({
  "duration": 613548000,
  "status": "passed"
});
formatter.before({
  "duration": 1086167400,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User open the URL",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user type \"https://www.saucedemo.com/\" in address bar",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Sauce Demo web will displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.saucedemo.com/",
      "offset": 11
    }
  ],
  "location": "BackgroundLoginStep.userTypeInAddressBar(String)"
});
formatter.result({
  "duration": 838886800,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundLoginStep.sauceDemoWebWillDisplayed()"
});
formatter.result({
  "duration": 36122100,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "TC002 - User login with incorrect credentials",
  "description": "",
  "id": "login-scenarios;tc002---user-login-with-incorrect-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 16,
      "name": "@TC002"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "user input username \"standard_user\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "user input password \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user click Login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "warning message appear \"Epic sadface: Password is required\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 21
    }
  ],
  "location": "LoginStep.userInputUsername(String)"
});
formatter.result({
  "duration": 98272700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 21
    }
  ],
  "location": "LoginStep.userInputPassword(String)"
});
formatter.result({
  "duration": 88821000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.userClickLoginButton()"
});
formatter.result({
  "duration": 63844400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Epic sadface: Password is required",
      "offset": 24
    }
  ],
  "location": "LoginStep.warningMessageAppear(String)"
});
formatter.result({
  "duration": 32770900,
  "status": "passed"
});
formatter.after({
  "duration": 624733800,
  "status": "passed"
});
formatter.before({
  "duration": 1118438900,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User open the URL",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user type \"https://www.saucedemo.com/\" in address bar",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Sauce Demo web will displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.saucedemo.com/",
      "offset": 11
    }
  ],
  "location": "BackgroundLoginStep.userTypeInAddressBar(String)"
});
formatter.result({
  "duration": 1226913600,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundLoginStep.sauceDemoWebWillDisplayed()"
});
formatter.result({
  "duration": 25146000,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "TC002 - User login with incorrect credentials",
  "description": "",
  "id": "login-scenarios;tc002---user-login-with-incorrect-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 16,
      "name": "@TC002"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "user input username \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "user input password \"secret_sauce\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user click Login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "warning message appear \"Epic sadface: Username is required\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 21
    }
  ],
  "location": "LoginStep.userInputUsername(String)"
});
formatter.result({
  "duration": 78924300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 21
    }
  ],
  "location": "LoginStep.userInputPassword(String)"
});
formatter.result({
  "duration": 104826200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.userClickLoginButton()"
});
formatter.result({
  "duration": 57017400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Epic sadface: Username is required",
      "offset": 24
    }
  ],
  "location": "LoginStep.warningMessageAppear(String)"
});
formatter.result({
  "duration": 26474500,
  "status": "passed"
});
formatter.after({
  "duration": 613112200,
  "status": "passed"
});
formatter.before({
  "duration": 1124705600,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User open the URL",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user type \"https://www.saucedemo.com/\" in address bar",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Sauce Demo web will displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.saucedemo.com/",
      "offset": 11
    }
  ],
  "location": "BackgroundLoginStep.userTypeInAddressBar(String)"
});
formatter.result({
  "duration": 1226313000,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundLoginStep.sauceDemoWebWillDisplayed()"
});
formatter.result({
  "duration": 13524100,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "TC002 - User login with incorrect credentials",
  "description": "",
  "id": "login-scenarios;tc002---user-login-with-incorrect-credentials;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 16,
      "name": "@TC002"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "user input username \"standarduser\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "user input password \"secretsauce\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user click Login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "warning message appear \"Epic sadface: Username and password do not match any user in this service\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "standarduser",
      "offset": 21
    }
  ],
  "location": "LoginStep.userInputUsername(String)"
});
formatter.result({
  "duration": 99158100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secretsauce",
      "offset": 21
    }
  ],
  "location": "LoginStep.userInputPassword(String)"
});
formatter.result({
  "duration": 88976100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.userClickLoginButton()"
});
formatter.result({
  "duration": 54486800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Epic sadface: Username and password do not match any user in this service",
      "offset": 24
    }
  ],
  "location": "LoginStep.warningMessageAppear(String)"
});
formatter.result({
  "duration": 28412800,
  "status": "passed"
});
formatter.after({
  "duration": 610336400,
  "status": "passed"
});
});