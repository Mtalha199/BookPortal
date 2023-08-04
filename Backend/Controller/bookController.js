const Book=require("../Modal/addBookModel")

const addBook=async(req,res,next)=>{
   
    try{
        console.log(req.body)
        const {tittle,author,no_of_pages,published_at}=req.body;
      
        if(!tittle || !author || !no_of_pages || !published_at)
        {
           return res.status(406).send("All Fields Are Required")
        }
        else
        {
            const book=new Book({
                tittle,
                author,no_of_pages,
                published_at
            })
    
            await book.save();
            return res.status(201).send("Book Added SuccessFully")
        }
           
       
    }catch(e)
    {
        next({ status: 500, message: e.message });

    }
}
const getBooks=async(req,res,next)=>{
    try
    {
        const allbooks=await Book.find();
        return res.status(200).send(allbooks)
    }catch(e)
    {
    next({ status: 500, message: e.message });

    }

    

}


const updateBook=async(req,res,next)=>{

try{
    
const {_id,tittle,author,no_of_pages,published_at}=req.body;
const updatedBook=await Book.findByIdAndUpdate(_id,
    {
        $set:{tittle,author,no_of_pages,published_at},
            new:true,
        

    })
    return res.status(200).send("Updated Book Data")


}catch(e)
{
    next({ status: 500, message: e.message });
    
}



}


const deleteBook=async(req,res,next)=>{
    try
    {
        const {_id}=req.body
        await Book.deleteOne({_id})
        return res.status(200).send("book Deleted")
    }
    catch(e)
    {

    next({ status: 500, message: e.message });

    }

    
}
module.exports = {
    addBook,
    getBooks,
    updateBook,
    deleteBook
}