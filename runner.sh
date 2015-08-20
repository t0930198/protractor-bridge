for((i=$1;i>1;i--));
do
	protractor conf.js &
done
protractor conf.js --params.seat=1 &
