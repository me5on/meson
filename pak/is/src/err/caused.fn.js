const caused = (

    $ => $ instanceof Error && $?.cause instanceof Error

);


export default caused;
