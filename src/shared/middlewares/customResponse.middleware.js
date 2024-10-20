export function customResponse(req, res, next) {
   res.ok200 = (msg, data) => {
      res.status(200).send({
         message: msg ?? 'Success',
         succses: true,
         code: 200,
         data: data,
      });
   };

   res.err500 = (msg, detail = null) => {
      res.status(200).send({
         message: msg ?? 'Internal Server Error',
         succses: false,
         code: 500,
         data: detail,
      });
   };

   res.err400 = (msg, detail = null) => {
      res.status(200).send({
         message: msg ?? 'Invalid data',
         succses: false,
         code: 400,
         data: detail,
      });
   };

   next();
}
