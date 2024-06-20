import { Request, Response} from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";
import { AdminRequest } from "../libs/types/member";

const memberService = new MemberService();

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
    try {
        console.log("goHome");
    res.render("home");
    // send | json | redirect | end | render
    } catch (err) {
        console.log("ERROR, goHome:", err);
    }
};

restaurantController.getSignup = (req: Request, res: Response) => {
    try {
        console.log("getSignup");
        res.render("signup");

    } catch (err) {
        console.log("ERROR, getSignup:", err);
    }
};

restaurantController.getLogin = (req: Request, res: Response) => {
    try {
        console.log("getLogin");
        res.render("login");

    } catch (err) {
        console.log("ERROR, getLogin:", err);
    }
};


restaurantController.processSignup = async (req: AdminRequest, res: Response) => {
    try {
        console.log("processSignup");
        const newMember: MemberInput = req.body;
        newMember.memberType = MemberType.RESTAURANT;
        const result = await memberService.processSignup(newMember);
// TODO: SESSIONS AUTHENTICATION

req.session.member = result;
req.session.save(function () {
    res.send(result);
});
    } catch (err) {
        console.log("ERROR, processSignup:", err);
    res.send(err);
    }
};

restaurantController.processLogin = async (req: AdminRequest, res: Response) => {
    try {
        console.log("processLogin");
        console.log("body:", req.body);
        const input: LoginInput = req.body;
        const result = await memberService.processLogin(input);
// TODO: SESSIONS AUTHENTICATION

req.session.member = result;
req.session.save(function () {
    res.send(result);
});
    } catch (err) {
        console.log("ERROR, processLogin:", err);
    res.send(err);
    }
};

export default restaurantController; 