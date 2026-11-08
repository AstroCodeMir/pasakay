import cors from 'cors'; import express, {NextFunction, Request, Response} from 'express'; import helmet from 'helmet';
export const app=express(); app.use(helmet()); app.use(cors()); app.use(express.json({limit:'1mb'}));
app.use((req,_res,next)=>{console.log(JSON.stringify({method:req.method,path:req.path,timestamp:new Date().toISOString()})); next();});
app.get('/api/health',(_req,res)=>res.json({status:'ok',service:'pasakay-api',timestamp:new Date().toISOString()}));
app.use((_req,res)=>res.status(404).json({error:{code:'NOT_FOUND',message:'Route not found'}}));
app.use((error:unknown,_req:Request,res:Response,_next:NextFunction)=>{console.error(error); res.status(500).json({error:{code:'INTERNAL_ERROR',message:'An unexpected error occurred'}});});
