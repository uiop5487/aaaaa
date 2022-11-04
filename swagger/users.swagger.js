/**
 * @swagger
 * /users:
 *  post:
 *   summary: 유저 등록
 *   tags: [Users]
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       properties:
 *        name:
 *         type: string
 *         example: "창서"
 *        email:
 *         type: string
 *         example: "aaa@naver.com"
 *        personal:
 *         type: string
 *         example: "111111-1111111"
 *        prefer:
 *         type: string
 *         example: "https://naver.com"
 *        pwd:
 *         type: string
 *         example: "1234124"
 *        phone:
 *         type: string
 *         example: "01012341234"
 *   response:
 *     200:
 *         description: 성공
 *         content:
 *          application/json:
 *           schema:
 *            type: string
 *            example: 61e62e84bf8893ecb66f35f9
 *  get:
 *     summary: 회원 목록
 *     tags: [Users]
 *     responses:
 *       200:
 *           description: 성공
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   properties:
 *                     og:
 *                       type: object
 *                       properties:
 *                         title:
 *                           type: string
 *                           example: 네이버
 *                         description:
 *                           type: string
 *                           example: 네이버에서 다양한 컨텐츠를 만나보세요.
 *                         image:
 *                           type: string
 *                           example:  https://s.pstatic.net/static/www/mobile/edit/2016/0705/mobile_212852414260.png
 *                     _id:
 *                       type: string
 *                       example: 623d625f9eece8b5ca862630
 *                     name:
 *                       type: string
 *                       example: "창서"
 *                     email:
 *                       type: string
 *                       example: "navve@naver.com"
 *                     personal:
 *                       type: string
 *                       example: "111111-1******"
 *                     prefer:
 *                       type: string
 *                       example: "https://naver.com"
 *                     pwd:
 *                       type: string
 *                       example: "1233214"
 *                     phone:
 *                       type: string
 *                       example: "01012341234"
 */
