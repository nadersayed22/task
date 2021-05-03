# TASK 

Develop a simple web application of two webpages, The first page should be having a simple login interface, The second one should be having a table.

## usage

### go to task rebo and clone code

1.Create & Run a virtual environment for this app.
    Open your terminal, go to the task app's cloned repo's directory, and run this command
    sudo apt-get install python3-pip
    sudo pip3 install virtualenv
    virtualenv task

2.Make sure you installed virtualenv
    pip install --upgrade virtualenv

3.Activate the to_do_task virtual environment
    source bin/activate

4.Install all of the needed packages.
    From your terminal running your to_do_taskvenv, run the following command
    pip install -r requirements.txt

### run migrations
If you'll use my test db, you don't need this step.
    python manage.py makemigrations
    python manage.py migrate
    pyton manage.py createsuperuser


5.Now, your configs are completed just run the application.
    python manage.py runserver


### use this links to router in project
*admin panel
    http://127.0.0.1:8000/admin/

*list users or creat users api
    http://127.0.0.1:8000/api/

*get user api
    http://127.0.0.1:8000/api/id

*to login user 
    http://127.0.0.1:8000/api/login/

*to signup user 
    http://127.0.0.1:8000/api/signup/

*to get JWT token
    http://127.0.0.1:8000/api/token/

*to refresh JWT token
    http://127.0.0.1:8000/api/token/refresh/

    
