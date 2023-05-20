import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";
//GET(read)

export const GET= async (request, {params})=>{
    try{
        await connectToDB();
        const prompt =await Prompt.findById(params.id).populate('creator');
        if(!prompt)
        return new Response("Prompt Not Found", {stats:404})

        return new Response(JSON.stringify(prompt),{status: 200})
    }
    catch(error)
    {
        
        return new Response("Failed to fetch all prompts",{status: 500})
    }
}

//PATCH (update)

export const PATCH = async (request, {params})=>{
    const {prompt:newprompt, tag:newtag}=await request.json();
    try{
      await connectToDB();

      const existingPrompt = await Prompt.findById(params.id);

      if(!existingPrompt)
        return new Response("Prompt Not Found", {stats:404});
      
        existingPrompt.prompt =newprompt;
        existingPrompt.tag=newtag;
         await existingPrompt.save();
        return new Response("Successfully Updated the Prompts",{status: 200})


    }
    catch(error)
    {
        return new Response("Failed to Update the prompt",{status: 500})
    }
} 


//DELETE (delete)

export const DELETE = async(request, {params})=>{
    try{
       await connectToDB();
       
        await Prompt.findByIdAndRemove(params.id);

        return new Response("Prompt Deleted Successfully", {status :200})
    }
    catch(error)
    {
        return new Response("Failed to Delete the prompt",{status: 500})
    }
}