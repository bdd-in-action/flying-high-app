import { BadRequestException, forwardRef, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { FlightsService } from './flights.service';
import { UserDto } from '../../users/dto/user.dto';
import { Account } from '../../users/interface/account.interface';
import { User, USER_LEVEL, USER_TITLE, SEAT_PREFERENCE } from '../../users/interface/users.interface';

@Injectable()
export class UsersService {
    private users: User[] = [
        {
            userId: '8XDGVLsNUp',
            email: 'admin@flyinghigh.com',
            password: 'admin',
            firstName: 'Tracy',
            lastName: 'Traveller',
            address: '1677 S Havana St, Aurora',
            title: USER_TITLE.MS,
            newsletterSub: true,
            userLevel: USER_LEVEL.STANDARD,
            points: 0,
            country: 'United States of America (the)',
            seatPreference: SEAT_PREFERENCE.AISLE
        }
    ]

    constructor(
        @Inject(forwardRef(() => FlightsService))
        private flightService: FlightsService
    ) { }

    getUsers() {
        return this.users;
    }

    getUserById(userId: string) {
        const user = this.users.find(u => u.userId === userId);
        return user;
    }

    getUserByEmail(email: string) {
        const user = this.users.find(u => u.email === email);
        return user;
    }

    createUser(user: UserDto) {
        if (!user.email) {
            throw new BadRequestException(
                HttpStatus.BAD_REQUEST,
                'Please enter your email'
            )
        } else if (!user.password) {
            throw new BadRequestException(
                HttpStatus.BAD_REQUEST,
                'Please enter your password'
            )
        } else if (!user.firstName) {
            throw new BadRequestException(
                HttpStatus.BAD_REQUEST,
                'Please enter your first name'
            )
        } else if (!user.lastName) {
            throw new BadRequestException(
                HttpStatus.BAD_REQUEST,
                'Please enter your last name'
            )
        } else if (!user.address) {
            throw new BadRequestException(
                HttpStatus.BAD_REQUEST,
                'Please enter your address'
            )
        } else if (!user.country) {
            throw new BadRequestException(
                HttpStatus.BAD_REQUEST,
                'Please enter your country'
            )
        }
        const exists = this.users.findIndex(u => u.email === user.email);
        if (exists > -1) {
            throw new BadRequestException(
                HttpStatus.BAD_REQUEST,
                'Email exists, please try another name'
            )
        } else if (
            user.seatPreference !== SEAT_PREFERENCE.AISLE &&
            user.seatPreference !== SEAT_PREFERENCE.WINDOW
        ) {
            throw new BadRequestException(
                HttpStatus.BAD_REQUEST,
                'Seat preference is the type of enum: SEAT_PREFERENCE: window OR aisle'
            )
        } else if (
            user.title !== USER_TITLE.MR && user.title !== USER_TITLE.MS && user.title !== USER_TITLE.MRS
        ) {
            throw new BadRequestException(
                HttpStatus.BAD_REQUEST,
                'User title is the type of enum: USER_TITLE: Mr, Ms OR Mrs'
            )
        }
        // create userId
        const userId = this.generateRandomString(10);

        const newUser = {
            ...user,
            userLevel: USER_LEVEL.STANDARD,
            points: 0,
            userId
        }
        this.users.push(newUser);
        return newUser;
    }

    deleteUser(userId: string) {
        this.users = this.users.filter(u => userId !== u.userId);
        return userId;
    }

    updateUser(userId: string, user: UserDto) {
        if (!user.email) {
            throw new BadRequestException(
                HttpStatus.BAD_REQUEST,
                'Please enter your email'
            )
        } else if (!user.password) {
            throw new BadRequestException(
                HttpStatus.BAD_REQUEST,
                'Please enter your password'
            )
        } else if (!user.firstName) {
            throw new BadRequestException(
                HttpStatus.BAD_REQUEST,
                'Please enter your first name'
            )
        } else if (!user.lastName) {
            throw new BadRequestException(
                HttpStatus.BAD_REQUEST,
                'Please enter your last name'
            )
        } else if (!user.address) {
            throw new BadRequestException(
                HttpStatus.BAD_REQUEST,
                'Please enter your address'
            )
        } else if (!user.country) {
            throw new BadRequestException(
                HttpStatus.BAD_REQUEST,
                'Please enter your country'
            )
        }
        const exists = this.users
            .filter(u => u.userId !== userId)
            .findIndex(u => u.email === user.email);
        if (exists > -1) {
            throw new BadRequestException(
                HttpStatus.BAD_REQUEST,
                'Email exists, please try another name'
            )
        } else if (
            user.seatPreference !== SEAT_PREFERENCE.AISLE &&
            user.seatPreference !== SEAT_PREFERENCE.WINDOW
        ) {
            throw new BadRequestException(
                HttpStatus.BAD_REQUEST,
                'Seat preference is the type of enum: SEAT_PREFERENCE: window OR aisle'
            )
        } else if (
            user.title !== USER_TITLE.MR && user.title !== USER_TITLE.MS && user.title !== USER_TITLE.MRS
        ) {
            throw new BadRequestException(
                HttpStatus.BAD_REQUEST,
                'User title is the type of enum: USER_TITLE: Mr, Ms OR Mrs'
            )
        }
        const index = this.users.findIndex(u => userId === u.userId);
        const points = this.users[index].points;
        const userLevel = this.users[index].userLevel;
        this.users[index] = { ...user, points, userLevel, userId };
        return this.users[index];
    }

    getFlightsByEmail(email: string) {
        const flights = this.flightService.getFlightsByEmail(email);
        const totalPoints = flights.reduce((a, b) => a + b.points, 0);
        const userAccount: Account[] = flights.map(flight => {
            return {
                flightInfo: {
                    date: new Date(flight.departureDate),
                    departure: flight.departure.name,
                    destination: flight.destination.name,
                    point: flight.points
                }
            }
        })
        return {
            totalPoints,
            userAccount
        };
    }

    /**
     * Reset earned points to 0 and status level to STANDARD.
     */
    resetPoints(authUser: User) {
        const currentUserIndex = this.users.findIndex(u => u.userId === authUser.userId);
        this.users[currentUserIndex].userLevel = USER_LEVEL.STANDARD;
        this.users[currentUserIndex].points = 0;
    }

    /**
     * Threshold levels are:
     *  - BRONZE: 1000 points (25% bonus)
     *  - SILVER: 2000 points (50% bonus)
     *  - GOLD: 5000 points (100% bonus)
     * Only flights booked at a given status level earn the bonus points at that level.
     * @param authUser 
     * @param points 
     * @returns 
     */
    updateUserPointsAndLevel(authUser: User, points: number): number {
        const userLevel = authUser.userLevel;
        const currentUserIndex = this.users.findIndex(u => u.userId === authUser.userId);
        const currentPoints: number = authUser.points;
        // const totalPoints = points + currentPoints;
        let newTotalPoints: number;
        let earnedPoints: number;
        switch (userLevel) {
            case USER_LEVEL.BRONZE: {
                earnedPoints = (1 + 0.25) * points;
                newTotalPoints = currentPoints + earnedPoints;
                break;
            }
            case USER_LEVEL.SILVER: {
                earnedPoints = (1 + 0.5) * points;
                newTotalPoints = currentPoints + earnedPoints;
                break;
            }
            case USER_LEVEL.GOLD: {
                earnedPoints = points * 2;
                newTotalPoints = currentPoints + points * 2;
                break;
            }
            default: {
                // standard level
                earnedPoints = points * 1;
                newTotalPoints = currentPoints + earnedPoints;
                break;
            }
        }
        newTotalPoints = Math.round(newTotalPoints);
        if (newTotalPoints >= 5000) {
            this.users[currentUserIndex].userLevel = USER_LEVEL.GOLD;
        } else if (newTotalPoints < 5000 && newTotalPoints >= 2000) {
            this.users[currentUserIndex].userLevel = USER_LEVEL.SILVER;
        } else if (newTotalPoints < 2000 && newTotalPoints >= 1000) {
            this.users[currentUserIndex].userLevel = USER_LEVEL.BRONZE;
        } else {
            this.users[currentUserIndex].userLevel = USER_LEVEL.STANDARD;
        }
        this.users[currentUserIndex].points = newTotalPoints;
        return Math.round(earnedPoints);
    }

    generateRandomString(length: number, charSet?: string): string {
        charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var randomString = '';
        for (var i = 0; i < length; i++) {
            var randomPoz = Math.floor(Math.random() * charSet.length);
            randomString += charSet.substring(randomPoz, randomPoz + 1);
        }
        return randomString;
    }

}
