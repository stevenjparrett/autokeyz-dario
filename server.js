"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
// server.ts
var express_1 = require("express");
var nodemailer_1 = require("nodemailer");
var body_parser_1 = require("body-parser");
var dotenv_1 = require("dotenv");
var cors_1 = require("cors");
dotenv_1["default"].config();
var app = (0, express_1["default"])();
var PORT = 3001;
var EMAIL_USER = "autokeyzjobs@outlook.com";
var EMAIL_PASS = "Salvatore1933";
app.use((0, cors_1["default"])({
    origin: 'http://0.0.0.0',
    methods: ['POST'],
    credentials: true // This allows session cookies from the client
}));
app.use(body_parser_1["default"].urlencoded({ extended: true }));
app.post('/api/contact', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, email, postcode, phoneNumber, vehicleModel, vehicleRegistration, message, isVehicleLocked, doesVehicleRunAndDrive, transporter, mailOptions, sendMailResponse, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, name = _a.name, email = _a.email, postcode = _a.postcode, phoneNumber = _a.phoneNumber, vehicleModel = _a.vehicleModel, vehicleRegistration = _a.vehicleRegistration, message = _a.message, isVehicleLocked = _a.isVehicleLocked, doesVehicleRunAndDrive = _a.doesVehicleRunAndDrive;
                transporter = nodemailer_1["default"].createTransport({
                    service: 'Outlook365',
                    auth: {
                        user: EMAIL_USER,
                        pass: EMAIL_PASS
                    }
                });
                mailOptions = {
                    from: EMAIL_USER,
                    to: 'sales@autokeyz.co.uk',
                    subject: '⚠️ New Job ⚠️',
                    text: "Name: ".concat(name, "\nEmail: ").concat(email, "\nPost Code: ").concat(postcode, "\nPhone Number: ").concat(phoneNumber, "\nVehicle Model: ").concat(vehicleModel, "\nVehicle Registration: ").concat(vehicleRegistration, "\nIs Vehicle Locked? ").concat(isVehicleLocked, "\nDoes Vehicle Run And Drive? ").concat(doesVehicleRunAndDrive, "\nMessage: ").concat(message)
                };
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, transporter.sendMail(mailOptions)];
            case 2:
                sendMailResponse = _b.sent();
                console.log('Email sent successfully:', sendMailResponse);
                res.status(200).send('Email sent successfully');
                return [3 /*break*/, 4];
            case 3:
                error_1 = _b.sent();
                console.error('Error sending email:', error_1);
                res.status(500).send('Error sending email: ');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.listen(PORT, '0.0.0.0', function () {
    console.log("Server running on http://0.0.0.0:".concat(PORT));
});
