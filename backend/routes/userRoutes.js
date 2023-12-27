import Express from "express";
const router = Express.Router();
import { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile, getUsers, getUserByID, deleteUsers, updateUsers } from "../controllers/userController.js";
import { protect, admin } from "../middlewawre/authMiddleware.js";

router.route('/').post(registerUser).get(protect, admin, getUsers);
router.post('/logout', logoutUser);
router.post('/auth', authUser);
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);
router.route('/:id').delete(protect, admin, deleteUsers).get(protect, admin, getUserByID).put(protect, admin, updateUsers);


export default router;