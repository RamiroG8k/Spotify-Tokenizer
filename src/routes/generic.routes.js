import { Router } from 'express';
import * as genCtrl from '../controllers/generic.controller';

const router = Router();

router.get('/hi', genCtrl.sayHi);
router.get('/spotify/:clientId/:clientSecret', genCtrl.getToken);

export default router;