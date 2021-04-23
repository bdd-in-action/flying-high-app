"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const flights_service_1 = require("./flights.service");
const users_interface_1 = require("../../users/interface/users.interface");
let UsersService = class UsersService {
    constructor(flightService) {
        this.flightService = flightService;
        this.users = [
            {
                userId: '8XDGVLsNUp',
                email: 'admin@flyinghigh.com',
                password: 'admin',
                firstName: 'Tracy',
                lastName: 'Traveller',
                address: '1677 S Havana St, Aurora',
                title: users_interface_1.USER_TITLE.MS,
                newsletterSub: true,
                userLevel: users_interface_1.USER_LEVEL.STANDARD,
                points: 0,
                country: 'United States of America (the)',
                seatPreference: users_interface_1.SEAT_PREFERENCE.AISLE
            }
        ];
    }
    getUsers() {
        return this.users;
    }
    getUserById(userId) {
        const user = this.users.find(u => u.userId === userId);
        return user;
    }
    getUserByEmail(email) {
        const user = this.users.find(u => u.email === email);
        return user;
    }
    createUser(user) {
        console.log("CREATE USER: " + user);
        if (!user.email) {
            throw new common_1.BadRequestException(common_1.HttpStatus.BAD_REQUEST, 'Please enter your email');
        }
        else if (!user.password) {
            throw new common_1.BadRequestException(common_1.HttpStatus.BAD_REQUEST, 'Please enter your password');
        }
        else if (!user.firstName) {
            throw new common_1.BadRequestException(common_1.HttpStatus.BAD_REQUEST, 'Please enter your first name');
        }
        else if (!user.lastName) {
            throw new common_1.BadRequestException(common_1.HttpStatus.BAD_REQUEST, 'Please enter your last name');
        }
        else if (!user.address) {
            throw new common_1.BadRequestException(common_1.HttpStatus.BAD_REQUEST, 'Please enter your address');
        }
        else if (!user.country) {
            throw new common_1.BadRequestException(common_1.HttpStatus.BAD_REQUEST, 'Please enter your country');
        }
        const exists = this.users.findIndex(u => u.email === user.email);
        if (exists > -1) {
            throw new common_1.BadRequestException(common_1.HttpStatus.BAD_REQUEST, 'Email exists, please try another name');
        }
        else if (user.seatPreference !== users_interface_1.SEAT_PREFERENCE.AISLE &&
            user.seatPreference !== users_interface_1.SEAT_PREFERENCE.WINDOW) {
            throw new common_1.BadRequestException(common_1.HttpStatus.BAD_REQUEST, 'Seat preference is the type of enum: SEAT_PREFERENCE: window OR aisle');
        }
        else if (user.title !== users_interface_1.USER_TITLE.MR && user.title !== users_interface_1.USER_TITLE.MS && user.title !== users_interface_1.USER_TITLE.MRS) {
            throw new common_1.BadRequestException(common_1.HttpStatus.BAD_REQUEST, 'User title is the type of enum: USER_TITLE: Mr, Ms OR Mrs');
        }
        const userId = this.generateRandomString(10);
        const newUser = Object.assign(Object.assign({}, user), { userLevel: users_interface_1.USER_LEVEL.STANDARD, userId });
        this.users.push(newUser);
        return newUser;
    }
    deleteUser(userId) {
        this.users = this.users.filter(u => userId !== u.userId);
        return userId;
    }
    updateUser(userId, user) {
        if (!user.email) {
            throw new common_1.BadRequestException(common_1.HttpStatus.BAD_REQUEST, 'Please enter your email');
        }
        else if (!user.password) {
            throw new common_1.BadRequestException(common_1.HttpStatus.BAD_REQUEST, 'Please enter your password');
        }
        else if (!user.firstName) {
            throw new common_1.BadRequestException(common_1.HttpStatus.BAD_REQUEST, 'Please enter your first name');
        }
        else if (!user.lastName) {
            throw new common_1.BadRequestException(common_1.HttpStatus.BAD_REQUEST, 'Please enter your last name');
        }
        else if (!user.address) {
            throw new common_1.BadRequestException(common_1.HttpStatus.BAD_REQUEST, 'Please enter your address');
        }
        else if (!user.country) {
            throw new common_1.BadRequestException(common_1.HttpStatus.BAD_REQUEST, 'Please enter your country');
        }
        const exists = this.users
            .filter(u => u.userId !== userId)
            .findIndex(u => u.email === user.email);
        if (exists > -1) {
            throw new common_1.BadRequestException(common_1.HttpStatus.BAD_REQUEST, 'Email exists, please try another name');
        }
        else if (user.seatPreference !== users_interface_1.SEAT_PREFERENCE.AISLE &&
            user.seatPreference !== users_interface_1.SEAT_PREFERENCE.WINDOW) {
            throw new common_1.BadRequestException(common_1.HttpStatus.BAD_REQUEST, 'Seat preference is the type of enum: SEAT_PREFERENCE: window OR aisle');
        }
        else if (user.title !== users_interface_1.USER_TITLE.MR && user.title !== users_interface_1.USER_TITLE.MS && user.title !== users_interface_1.USER_TITLE.MRS) {
            throw new common_1.BadRequestException(common_1.HttpStatus.BAD_REQUEST, 'User title is the type of enum: USER_TITLE: Mr, Ms OR Mrs');
        }
        console.error("User = " + user.firstName);
        const index = this.users.findIndex(u => userId === u.userId);
        const points = this.users[index].points;
        const userLevel = this.users[index].userLevel;
        this.users[index] = Object.assign(Object.assign({}, user), { points, userLevel, userId });
        return this.users[index];
    }
    getFlightsByEmail(email) {
        const flights = this.flightService.getFlightsByEmail(email);
        const totalPoints = flights.reduce((a, b) => a + b.points, 0);
        const userAccount = flights.map(flight => {
            return {
                flightInfo: {
                    date: new Date(flight.departureDate),
                    departure: flight.departure.name,
                    destination: flight.destination.name,
                    point: flight.points
                }
            };
        });
        return {
            totalPoints,
            userAccount
        };
    }
    updateUserPointsAndLevel(authUser, points) {
        const userLevel = authUser.userLevel;
        const currentUserIndex = this.users.findIndex(u => u.userId === authUser.userId);
        const currentPoints = authUser.points;
        let newTotalPoints;
        let earnedPoints;
        switch (userLevel) {
            case users_interface_1.USER_LEVEL.BRONZE: {
                earnedPoints = (1 + 0.25) * points;
                newTotalPoints = earnedPoints + currentPoints;
                break;
            }
            case users_interface_1.USER_LEVEL.SILVER: {
                earnedPoints = (1 + 0.5) * points;
                newTotalPoints = earnedPoints + currentPoints;
                break;
            }
            case users_interface_1.USER_LEVEL.GOLD: {
                earnedPoints = points * 2;
                newTotalPoints = currentPoints + points * 2;
                console.log('EARNED POINTS:' + earnedPoints);
                break;
            }
            default: {
                earnedPoints = points;
                newTotalPoints = earnedPoints + currentPoints;
                break;
            }
        }
        newTotalPoints = Math.round(newTotalPoints);
        if (newTotalPoints >= 5000) {
            this.users[currentUserIndex].userLevel = users_interface_1.USER_LEVEL.GOLD;
        }
        else if (newTotalPoints < 5000 && newTotalPoints >= 2000) {
            this.users[currentUserIndex].userLevel = users_interface_1.USER_LEVEL.SILVER;
        }
        else if (newTotalPoints < 2000 && newTotalPoints >= 1000) {
            this.users[currentUserIndex].userLevel = users_interface_1.USER_LEVEL.BRONZE;
        }
        else {
            this.users[currentUserIndex].userLevel = users_interface_1.USER_LEVEL.STANDARD;
        }
        this.users[currentUserIndex].points = newTotalPoints;
        return Math.round(earnedPoints);
    }
    generateRandomString(length, charSet) {
        charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var randomString = '';
        for (var i = 0; i < length; i++) {
            var randomPoz = Math.floor(Math.random() * charSet.length);
            randomString += charSet.substring(randomPoz, randomPoz + 1);
        }
        return randomString;
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(common_1.forwardRef(() => flights_service_1.FlightsService))),
    __metadata("design:paramtypes", [flights_service_1.FlightsService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map