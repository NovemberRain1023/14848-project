# 14848-project option-I
project option I of CMU 14848

video demo on how I build my applications:
https://cmu.app.box.com/folder/151045892185

I will use docker to deploy all the applications of the project.
The URL of docker images of my application is:
https://hub.docker.com/r/harisekhon/hadoop
https://hub.docker.com/r/jupyter/minimal-notebook
https://hub.docker.com/r/bitnami/spark
https://hub.docker.com/_/sonarqube

I first pull all the image to the GCP container registry and tag them dividely.
docker pull jupyter/minimal-notebook
docker tag jupyter/minimal-notebook gcr.io/amiable-crane-327202/xupeng_shi/mininotebook:2

docker pull harisekhon/Hadoop
docker tag harisekhon/hadoop gcr.io/amiable-crane-327202/xupeng_shi/harisekhon/hadoop

docker pull bitnami/spark
docker tag bitnami/spark gcr.io/amiable-crane-327202/xupeng_shi/bitnami1/spark

docker pull sonarqube
docker tag sonarqube gcr.io/amiable-crane-327202/xupeng_shi/sonarqube

![image](https://user-images.githubusercontent.com/67767809/143725926-a02ea4b9-cafa-4239-816c-dd6afc6dd8c6.png)


Then we deploy them dividely.
Hadoop:
I deploy Hadoop and expose it on port 8042
![image](https://user-images.githubusercontent.com/67767809/143725948-f2431e93-16b6-44c5-b2c6-7769372c4cea.png)


Jupyter Notebook:
I deploy Hadoop and expose it on port 8888
![image](https://user-images.githubusercontent.com/67767809/143725978-46832255-b008-4680-a7e7-4a509db69c3d.png)


Spark:
I deploy spark and expose it on port 8080
![image](https://user-images.githubusercontent.com/67767809/143725986-f7b4ec87-b72c-4963-b72f-1a37991aed91.png)

sonarqube:
I deploy sonarqube and expose it on port 9000

Then I write a JS node terminal and run then dividely:
![image](https://user-images.githubusercontent.com/67767809/143726011-9931bf90-af16-4f3e-b196-57992add0155.png)

