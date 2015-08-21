for((i=$1-1;i>=0;i--));
do
	protractor conf.js --params.account=$i --params.password=$i & 
done
