#include<stdio.h>
#include<math.h>
int main(){
    // (a) check if a given number is a armstrong number or not
    int  num,n,originalNum,rem,result=0;
    printf("Enter the number and how many digits in it : ");
    scanf("%d %d",&num,&n);

    originalNum=num;
    while(originalNum != 0){
        // get the last digit from the number
        rem = originalNum % 10;
        result += pow(rem,n);              // add the pow of each digit number everytime 
        // remove the last digit and get the remaining number
        originalNum/=10;
    }

    if(result == num){
        printf("%d is an armstrong number\n",num);
    }
    else{
        printf("%d is not an armstrong number\n",num);
    }


// (b) check if the number is a natural number
    int num;
    printf("Enter the number : ");
    scanf("%d",&num);

    if(num>0){
        printf("%d is natural number",num);
    }
    else{
        printf("%d is not a natural number",num);
    }

    return 0;
}