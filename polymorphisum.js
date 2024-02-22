class FirstClass{

    add()
    {
        console.log("first method");
    }
}
class scondClass extends FirstClass
{
    add(){
        console.log(30+60);
    }
}
class thirdClass extends FirstClass
{
    add(){
        console.log("last method");
    }
}
let ob=new FirstClass();
let ob1 =new scondClass();
let ob2 =new thirdClass();

ob.add();
ob1.add();
ob2.add();
