# sam-local-demo

Demo usage.

To demonstate how to run lambda locally and APIG proxy integration locally.

## Upgrade Cloud9 Environment for Java Developer

If you plan to develop java lambda function in Cloud9, there are a lot of instructions you need to do.

Update JDK to OpenJDK 1.8

```bash
sudo yum -y update
sudo yum -y install java-1.8.0-openjdk-devel
sudo update-alternatives --config java
```

Output:

```bash
There are 2 programs which provide 'java'.

  Selection    Command
-----------------------------------------------
*+ 1           /usr/lib/jvm/jre-1.7.0-openjdk.x86_64/bin/java
   2           /usr/lib/jvm/jre-1.8.0-openjdk.x86_64/bin/java

remember to choose to 1.8 version
```

Then, also amke sure config javac to 1.8

```bash
sudo update-alternatives --config javac
```

Output:

```bash
There is 1 program that provides 'javac'.

  Selection    Command
-----------------------------------------------
*+ 1           /usr/lib/jvm/java-1.8.0-openjdk.x86_64/bin/javac

Enter to keep the current selection[+], or type selection number:
```

Install Maven

```bash

sudo wget http://repos.fedorapeople.org/repos/dchen/apache-maven/epel-apache-maven.repo -O /etc/yum.repos.d/epel-apache-maven.repo
sudo sed -i s/\$releasever/6/g /etc/yum.repos.d/epel-apache-maven.repo
sudo yum install -y apache-maven
```

Final Check Java, Javac version for 1.8
>If the current version is not 1.8, please re-run the command to adjust.

```bash
sudo update-alternatives --config javac
sudo update-alternatives --config java
```

## Run Lambda function in locall

```bash
# Invoking function with event file
$ sam local invoke "Ratings" -e event.json

# Invoking function with event via stdin
$ echo '{"message": "Hey, are you there?" }' | sam local invoke "Ratings"

# For more options
$ sam local invoke --help
```

## Run Lambda proxy integration behind API Gateway

Both sam local invoke and sam local start-api support local debugging of your functions.

To run SAM Local with debugging support enabled, just specify --debug-port or -d on the command line.

```
# Invoke a function locally in debug mode on port 5858
$ sam local invoke -d 5858 <function logical id>

# Start local API Gateway in debug mode on port 5858
$ sam local start-api -d 5858

# Start local API Gateway no debug mode
$ sam local start-api
```
