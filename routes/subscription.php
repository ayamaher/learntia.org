<?php

Route::group(['middleware'=>['installed','auth','activity'],'prefix'=>'dashboard/subscription'],function (){

    /**
     * PACKAGE
     */
    Route::get('/','SubscriptionController@index')->name('subscription.index');
    Route::post('/create','SubscriptionController@create')->name('subscription.create');
    Route::get('/edit/{id}','SubscriptionController@edit')->name('subscription.edit');
    Route::post('/update/{id}','SubscriptionController@update')->name('subscription.update');
    Route::get('/deactivate/{id}','SubscriptionController@deactivate')->name('subscription.deactivate');
    Route::get('/popular/{id}','SubscriptionController@popular')->name('subscription.popular');


    /**
    * REQUESTS
    */
    Route::get('/requests','SubscriptionController@requests')->name('subscription.requests');
    Route::get('/requests/{fire}/{id}/{course_id}','SubscriptionController@request_fire')->name('subscription.request.fire');

    

    /**
     * COURSES
     */
    Route::get('/courses','SubscriptionController@courses')->name('subscription.courses');
    Route::get('/select/courses','SubscriptionController@selectCourses')->name('subscription.select.courses'); //ajax

    Route::get('/package/courses/{package}','SubscriptionController@packageCourse')->name('subscription.package.courses');

    /**
     * SETTINGS
     */
    Route::get('/settings','SubscriptionController@settings')->name('subscription.settings');
    Route::post('/settings/update','SubscriptionController@settingsUpdate')->name('subscription.settings.update');
    
    /**
     * MEMBER
     */
    Route::get('/members','SubscriptionController@members')->name('subscription.members');
    
    /**
     * PAYMENT
     */
    Route::get('/payments','SubscriptionController@payments')->name('subscription.payments');
    
    /**
     * EARNING
     */
    Route::get('/instructor/earning','SubscriptionController@instructor_earning')->name('subscription.instructor.earning'); // storing earning automatic schedule 2
    Route::get('/instructor/earning/{id}','SubscriptionController@instructor_earning_view')->name('subscription.instructor.earning.view');
    Route::post('/earning','SubscriptionController@earning')->name('subscription.earning'); // storing earning automatic schedule 1
    
});

/**
 * FRONEND
 */
Route::get('/subscription/{package}','SubscriptionController@frontend')->name('subscription.frontend');
Route::get('/subscription/cart/list','SubscriptionController@cartList')->name('subscription.cart');
Route::get('my/subscription', 'SubscriptionController@my_subscription')->name('my.subscription');
Route::get('my/subscription/{package}', 'SubscriptionController@my_subscription_package_course')->name('my.subscription.package.course');
Route::get('/subscription/lesson/{package}', 'SubscriptionController@subscription_lesson_details')->name('subscription.lesson.details');
