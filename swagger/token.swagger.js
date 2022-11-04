/**
 * @swagger
 * /tokens/phone:
 *   post:
 *     summary: 핸드폰 번호 토큰 전송
 *     tags: [Tokens]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               phone:
 *                 type: string
 *                 example: "01012341234"
 *     responses:
 *       200:
 *         description: 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: "인증번호 발송완료"
 *   patch:
 *     summary: 핸드폰 번호 토큰 인증
 *     tags: [Tokens]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               phone:
 *                 type: string
 *                 example: "01012341234"
 *               token:
 *                 type: string
 *                 example: "123456"
 *     responses:
 *       200:
 *           description: 성공
 *           content:
 *             application/json:
 *               schema:
 *                 type: boolean
 *                 example: true
 */
