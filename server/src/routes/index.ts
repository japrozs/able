import { Router, Request, Response } from "express";
import { User } from "../entities/User";

const login = async (req: Request, res: Response) => {
    const user = await User.findOne({
        where: { authToken: req.body.authToken },
    });
    if (!user) {
        return res.status(200).json({
            authToken: req.body.authToken,
        });
    }
    return res.status(200).json({
        authToken: req.body.authToken,
        user,
    });
};

const router = Router();
router.post("/login", login);

export default router;
