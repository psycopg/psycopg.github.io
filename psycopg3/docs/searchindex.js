Search.setIndex({docnames:["adaptation","connection","cursor","errors","from_pg2","index","install","pq","sql","usage"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,sphinx:56},filenames:["adaptation.rst","connection.rst","cursor.rst","errors.rst","from_pg2.rst","index.rst","install.rst","pq.rst","sql.rst","usage.rst"],objects:{"psycopg3.AsyncConnection":{close:[1,1,1,""],commit:[1,1,1,""],connect:[1,1,1,""],cursor:[1,1,1,""],notifies:[1,1,1,""],rollback:[1,1,1,""],set_autocommit:[1,1,1,""],set_client_encoding:[1,1,1,""],transaction:[1,1,1,""]},"psycopg3.AsyncCopy":{read:[2,1,1,""],write:[2,1,1,""],write_row:[2,1,1,""]},"psycopg3.AsyncCursor":{close:[2,1,1,""],connection:[2,2,1,""],copy:[2,1,1,""],execute:[2,1,1,""],executemany:[2,1,1,""],fetchall:[2,1,1,""],fetchmany:[2,1,1,""],fetchone:[2,1,1,""]},"psycopg3.Column":{display_size:[2,1,1,""],internal_size:[2,1,1,""],name:[2,1,1,""],precision:[2,1,1,""],scale:[2,1,1,""],type_code:[2,1,1,""]},"psycopg3.Connection":{add_notice_handler:[1,1,1,""],add_notify_handler:[1,1,1,""],autocommit:[1,2,1,""],cancel:[1,1,1,""],client_encoding:[1,2,1,""],close:[1,1,1,""],closed:[1,2,1,""],commit:[1,1,1,""],connect:[1,1,1,""],cursor:[1,1,1,""],info:[1,2,1,""],notifies:[1,1,1,""],remove_notice_handler:[1,1,1,""],remove_notify_handler:[1,1,1,""],rollback:[1,1,1,""],transaction:[1,1,1,""]},"psycopg3.Copy":{read:[2,1,1,""],write:[2,1,1,""],write_row:[2,1,1,""]},"psycopg3.Cursor":{close:[2,1,1,""],closed:[2,2,1,""],connection:[2,2,1,""],copy:[2,1,1,""],description:[2,2,1,""],execute:[2,1,1,""],executemany:[2,1,1,""],fetchall:[2,1,1,""],fetchmany:[2,1,1,""],fetchone:[2,1,1,""],nextset:[2,1,1,""],params:[2,2,1,""],pgresult:[2,2,1,""],query:[2,2,1,""],rowcount:[2,2,1,""]},"psycopg3.Notify":{channel:[1,2,1,""],payload:[1,2,1,""],pid:[1,2,1,""]},"psycopg3.Transaction":{connection:[1,2,1,""],savepoint_name:[1,1,1,""]},"psycopg3.adapt":{Dumper:[0,0,1,""],Loader:[0,0,1,""],Transformer:[0,0,1,""]},"psycopg3.adapt.Dumper":{dump:[0,1,1,""],oid:[0,2,1,""],quote:[0,1,1,""],register:[0,1,1,""],register_binary:[0,1,1,""]},"psycopg3.adapt.Loader":{load:[0,1,1,""],register:[0,1,1,""],register_binary:[0,1,1,""]},"psycopg3.errors":{DataError:[3,3,1,""],DatabaseError:[3,3,1,""],Diagnostic:[3,0,1,""],Error:[3,3,1,""],IntegrityError:[3,3,1,""],InterfaceError:[3,3,1,""],InternalError:[3,3,1,""],NotSupportedError:[3,3,1,""],OperationalError:[3,3,1,""],ProgrammingError:[3,3,1,""],Warning:[3,3,1,""],lookup:[3,5,1,""]},"psycopg3.errors.Diagnostic":{column_name:[3,2,1,""],constraint_name:[3,2,1,""],context:[3,2,1,""],datatype_name:[3,2,1,""],internal_position:[3,2,1,""],internal_query:[3,2,1,""],message_detail:[3,2,1,""],message_hint:[3,2,1,""],message_primary:[3,2,1,""],schema_name:[3,2,1,""],severity:[3,2,1,""],severity_nonlocalized:[3,2,1,""],source_file:[3,2,1,""],source_function:[3,2,1,""],source_line:[3,2,1,""],sqlstate:[3,2,1,""],statement_position:[3,2,1,""],table_name:[3,2,1,""]},"psycopg3.errors.Error":{diag:[3,2,1,""]},"psycopg3.pq":{ConnStatus:[7,0,1,""],Conninfo:[7,0,1,""],DiagnosticField:[7,0,1,""],Escaping:[7,0,1,""],ExecStatus:[7,0,1,""],Format:[7,0,1,""],PGcancel:[7,0,1,""],PGconn:[7,0,1,""],PGresult:[7,0,1,""],Ping:[7,0,1,""],PollingStatus:[7,0,1,""],TransactionStatus:[7,0,1,""],__impl__:[7,6,1,""],error_message:[7,5,1,""],version:[7,5,1,""]},"psycopg3.pq.ConnStatus":{BAD:[7,2,1,""],OK:[7,2,1,""]},"psycopg3.pq.DiagnosticField":{COLUMN_NAME:[7,2,1,""],CONSTRAINT_NAME:[7,2,1,""],CONTEXT:[7,2,1,""],DATATYPE_NAME:[7,2,1,""],INTERNAL_POSITION:[7,2,1,""],INTERNAL_QUERY:[7,2,1,""],MESSAGE_DETAIL:[7,2,1,""],MESSAGE_HINT:[7,2,1,""],MESSAGE_PRIMARY:[7,2,1,""],SCHEMA_NAME:[7,2,1,""],SEVERITY:[7,2,1,""],SEVERITY_NONLOCALIZED:[7,2,1,""],SOURCE_FILE:[7,2,1,""],SOURCE_FUNCTION:[7,2,1,""],SOURCE_LINE:[7,2,1,""],SQLSTATE:[7,2,1,""],STATEMENT_POSITION:[7,2,1,""],TABLE_NAME:[7,2,1,""]},"psycopg3.pq.ExecStatus":{BAD_RESPONSE:[7,2,1,""],COMMAND_OK:[7,2,1,""],COPY_BOTH:[7,2,1,""],COPY_IN:[7,2,1,""],COPY_OUT:[7,2,1,""],EMPTY_QUERY:[7,2,1,""],FATAL_ERROR:[7,2,1,""],NONFATAL_ERROR:[7,2,1,""],SINGLE_TUPLE:[7,2,1,""],TUPLES_OK:[7,2,1,""]},"psycopg3.pq.Format":{BINARY:[7,2,1,""],TEXT:[7,2,1,""]},"psycopg3.pq.PGcancel":{cancel:[7,1,1,""],free:[7,1,1,""]},"psycopg3.pq.PGconn":{get_cancel:[7,1,1,""]},"psycopg3.pq.Ping":{NO_ATTEMPT:[7,2,1,""],NO_RESPONSE:[7,2,1,""],OK:[7,2,1,""],REJECT:[7,2,1,""]},"psycopg3.pq.PollingStatus":{FAILED:[7,2,1,""],OK:[7,2,1,""],READING:[7,2,1,""],WRITING:[7,2,1,""]},"psycopg3.pq.TransactionStatus":{ACTIVE:[7,2,1,""],IDLE:[7,2,1,""],INERROR:[7,2,1,""],INTRANS:[7,2,1,""],UNKNOWN:[7,2,1,""]},"psycopg3.sql":{Composable:[8,0,1,""],Composed:[8,0,1,""],DEFAULT:[8,6,1,""],Identifier:[8,0,1,""],Literal:[8,0,1,""],NULL:[8,6,1,""],Placeholder:[8,0,1,""],SQL:[8,0,1,""],quote:[8,5,1,""]},"psycopg3.sql.Composable":{as_string:[8,1,1,""]},"psycopg3.sql.Composed":{join:[8,1,1,""]},"psycopg3.sql.SQL":{format:[8,1,1,""],join:[8,1,1,""]},psycopg3:{AsyncConnection:[1,0,1,""],AsyncCopy:[2,0,1,""],AsyncCursor:[2,0,1,""],AsyncTransaction:[1,0,1,""],Column:[2,0,1,""],Connection:[1,0,1,""],Copy:[2,0,1,""],Cursor:[2,0,1,""],Notify:[1,0,1,""],Rollback:[1,3,1,""],Transaction:[1,0,1,""],adapt:[0,4,0,"-"],errors:[3,4,0,"-"],pq:[7,4,0,"-"],sql:[8,4,0,"-"]}},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","attribute","Python attribute"],"3":["py","exception","Python exception"],"4":["py","module","Python module"],"5":["py","function","Python function"],"6":["py","data","Python data"]},objtypes:{"0":"py:class","1":"py:method","2":"py:attribute","3":"py:exception","4":"py:module","5":"py:function","6":"py:data"},terms:{"02000":3,"02001":3,"03000":3,"08000":3,"08001":3,"08003":3,"08004":3,"08006":3,"08007":3,"08p01":3,"09000":3,"0a000":3,"0b000":3,"0f000":3,"0f001":3,"0l000":3,"0lp01":3,"0p000":3,"0z000":3,"0z002":3,"100":9,"20000":3,"21000":3,"2200":3,"22000":3,"22001":3,"22002":3,"22003":3,"22004":3,"22005":3,"22007":3,"22008":3,"22009":3,"2200b":3,"2200c":3,"2200d":3,"2200f":3,"2200g":3,"2200h":3,"2200l":3,"2200m":3,"2200n":3,"2200t":3,"22010":3,"22011":3,"22012":3,"22013":3,"22014":3,"22015":3,"22016":3,"22018":3,"22019":3,"2201b":3,"2201e":3,"2201f":3,"2201g":3,"2201w":3,"2201x":3,"22021":3,"22022":3,"22023":3,"22024":3,"22025":3,"22026":3,"22027":3,"2202e":3,"2202g":3,"2202h":3,"22030":3,"22031":3,"22032":3,"22033":3,"22034":3,"22035":3,"22036":3,"22037":3,"22038":3,"22039":3,"2203a":3,"2203b":3,"2203c":3,"2203d":3,"2203e":3,"2203f":3,"22p01":3,"22p02":3,"22p03":3,"22p04":3,"22p05":3,"22p06":3,"23000":3,"23001":3,"23502":3,"23503":3,"23505":3,"23514":3,"23p01":3,"24000":3,"25000":3,"25001":3,"25002":3,"25003":3,"25004":3,"25005":3,"25006":3,"25007":3,"25008":3,"25p01":3,"25p02":3,"25p03":3,"26000":3,"27000":3,"28000":3,"28p01":3,"2b000":3,"2bp01":3,"2d000":3,"2f000":3,"2f002":3,"2f003":3,"2f004":3,"2f005":3,"34000":3,"38000":3,"38001":3,"38002":3,"38003":3,"38004":3,"39000":3,"39001":3,"39004":3,"39p01":3,"39p02":3,"39p03":3,"3b000":3,"3b001":3,"3d000":3,"3f000":3,"40000":3,"40001":3,"40002":3,"40003":3,"40p01":3,"42000":3,"42501":3,"42601":3,"42602":3,"42611":3,"42622":3,"42701":3,"42702":3,"42703":3,"42704":3,"42710":3,"42712":3,"42723":3,"42725":3,"42803":3,"42804":3,"42809":3,"42830":3,"42846":3,"42883":3,"428c9":3,"42939":3,"42p01":3,"42p02":3,"42p03":3,"42p04":3,"42p05":3,"42p06":3,"42p07":3,"42p08":3,"42p09":3,"42p10":3,"42p11":3,"42p12":3,"42p13":3,"42p14":3,"42p15":3,"42p16":3,"42p17":3,"42p18":3,"42p19":3,"42p20":3,"42p21":3,"42p22":3,"44000":3,"53000":3,"53100":3,"53200":3,"53300":3,"53400":3,"54000":3,"54001":3,"54011":3,"54023":3,"55000":3,"55006":3,"55p02":3,"55p03":3,"55p04":3,"57000":3,"57014":3,"57p01":3,"57p02":3,"57p03":3,"57p04":3,"58000":3,"58030":3,"58p01":3,"58p02":3,"72000":3,"961823":9,"abstract":[0,8],"byte":[0,2,7,9],"case":[0,1,2,3,4,8,9],"catch":3,"class":[0,3,4,5,7,8,9],"default":[0,2,8,9],"enum":1,"export":7,"final":0,"function":[0,3,4,5,7,9],"import":[0,3,7,8,9],"int":[0,1,2,4,7],"long":9,"new":[1,2,5,7,8,9],"null":8,"return":[0,1,2,3,4,7,8,9],"throw":4,"true":[1,2,3,9],"try":[1,3,6,7,9],"var":[2,7],"while":9,But:9,For:[0,1,3,9],INTO:9,Its:2,Not:3,One:1,The:[0,3,4,5,6,7,8,9],There:[3,4,7],These:3,Use:[4,8],Using:[0,2,4,5],WITH:3,Will:7,__del__:7,__impl__:7,abandon:7,abc:9,abl:[1,6,9],abort:9,about:[1,2,9],abov:[1,6],absolut:8,accept:[1,4,7],access:[3,4],accid:[8,9],accord:[0,3,8],account1:9,account2:9,account:[4,9],achiev:2,aconn:9,act:9,action:[3,9],activ:[7,9],activesqltransact:3,actual:7,acur:9,adapt:[2,8,9],add_notice_handl:[1,3],add_notify_handl:[1,9],add_to_bal:9,added:8,address:4,adminshutdown:3,advis:6,affect:[1,2,3],after:[1,2,3,9],again:7,alias:1,all:[0,1,2,3,6,7,8,9],alloc:3,allow:[0,3,5,8,9],almost:9,alpin:6,alreadi:[3,9],also:[1,2,3,4,8,9],alter:2,altern:[4,9],ambiguousalia:3,ambiguouscolumn:3,ambiguousfunct:3,ambiguousparamet:3,amount:9,ani:[0,1,2,4,5,8,9],anymor:3,api:[3,5,9],appear:7,append:9,applic:[0,7],apt:6,arg:[2,8],argument:[0,1,7,8],around:7,arrai:[0,4],arrays:2,arraysubscripterror:3,as_str:8,assertfailur:3,associ:2,assum:0,async:[1,2,4,5],asyncconnect:[2,5,9],asynccopi:2,asynccursor:[1,5,9],asynchron:[1,2,5],asyncio:[1,2,4,5,9],asynciter:1,asynctransact:1,attach:1,attempt:7,attribut:[3,7,9],author:3,auto:8,autocommit:[1,9],automat:[1,2,4,7,8],avail:[0,2,3,6,7],avali:8,avoid:9,await:[1,2,9],awar:4,back:[1,9],backend:1,bad:7,bad_respons:7,badcopyfileformat:3,balanc:9,bank:9,bar:8,base:[0,3,5,8],baseconnect:8,basecursor:8,basic:5,batch:8,baz:8,becaus:[8,9],been:[0,4,6,7],befor:[0,7,8],behav:[1,2,4],behaviour:[1,2,4,9],being:9,below:3,best:[2,7],better:[2,5,7],between:[0,3,9],binari:[0,2,5,6,7],bind:5,bloat:9,block:[1,2,4,5],bool:[1,2],both:9,bound:6,box:4,branchtransactionalreadyact:3,broken:7,bubbl:9,buffer:2,build:[0,6],built:7,builtin:[0,4],bundl:7,burn:0,bytea:4,cach:8,cake:0,call:[0,1,2,3,4,9],callabl:1,callback:[1,3,9],callproc:4,camelcas:3,can:[0,1,2,3,4,6,7,8,9],cancel:[1,7,9],cancelcommand:9,cannot:[4,8,9],cannotcoerc:3,cannotconnectnow:3,cantchangeruntimeparam:3,car:0,cardin:3,cardinalityviol:3,care:[1,2],casenotfound:3,cast:4,catalog:3,caus:[3,9],certain:[0,4],chain:2,chanc:9,chang:[0,1,3,6,9],channel:[1,9],charact:8,characternotinrepertoir:3,check:[1,3,4],checkviol:3,choic:[0,7],chosen:1,clash:3,classic:[1,2],classmethod:[0,1],clearli:8,client:[0,1,3,4,6,7],client_encod:1,close:[1,2,4,7,9],code:[3,9],codec:1,col1:9,col2:9,collationmismatch:3,column:2,column_nam:[3,7],come:[3,8,9],comma:8,command:[1,2,4,7,9],command_ok:7,commit:[1,9],common:[4,8,9],commun:[5,7,9],comp:8,compar:[1,9],compat:3,compil:[6,7],complet:[3,4,7,9],complianc:3,compliant:[1,2],compos:[2,4,8],composit:[0,5],conclud:9,concret:0,concurr:1,condens:9,condit:[3,9],configfileerror:3,configur:[1,2,3,5],configurationlimitexceed:3,conn:[1,2,7,8,9],connect:[0,2,3,4,5,7,8],connection_timeout:1,connectiondoesnotexist:3,connectionexcept:3,connectionfailur:3,conninfo:[1,7],connstatu:7,consequ:[0,9],consid:[2,4],constant:[7,8],constraint:3,constraint_nam:[3,7],constructor:1,consum:9,contact:7,contain:[0,1,4,6,7,8,9],containingsqlnotpermit:3,content:5,context:[0,1,2,3,4,7,8,9],continu:[1,9],control:[3,9],conveni:8,convers:[0,9],convert:[0,2,3,8],cool:1,copi:[2,5,7,8],copy_both:7,copy_expert:4,copy_in:7,copy_out:7,core:0,coroutin:[1,2],correct:9,could:[3,7,9],counterpart:9,cover:9,crash:8,crashshutdown:3,creat:[0,2,7,8,9],creativ:[2,9],ctype:[6,7],cur:[2,3,4,8,9],current:[1,2,6,7,9],cursor:[0,1,3,4,5,8],custom:4,customis:0,cycl:0,cython:7,danger:8,data:[2,3,4,5,7,9],databas:[0,1,2,3,4,8,9],databasedrop:3,databaseerror:3,datacorrupt:3,dataerror:3,dataexcept:3,datatype_nam:[3,7],datatypemismatch:3,date:0,datetim:2,datetimefieldoverflow:3,dbapi:[1,2,4,5],dbname:9,deadlockdetect:3,deal:7,dealt:4,debian:6,debug:6,decim:2,decod:[7,9],def:9,defin:3,depend:3,dependentobjectsstillexist:3,dependentprivilegedescriptorsstillexist:3,deriv:3,describ:[0,2],descript:[2,7],descriptor:3,design:[5,9],detail:[1,2,3,4,7,9],dev:6,develop:[6,7],diag:3,diagnost:[1,3],diagnosticfield:7,diagnosticsexcept:3,didn:[0,2],differ:[0,1,3,5,8],digit:2,directli:8,disallow:7,disambigu:3,discard:9,disconnect:3,diskful:3,dispatch:0,display_s:2,distinct:4,divis:3,division_by_zero:3,divisionbyzero:3,doc:9,document:[3,7,9],doe:4,doesn:[0,4,6,7,8,9],don:[0,2,6,7,9],dot:8,doubl:[8,9],down:9,dump:0,dumper:0,duplicatealia:3,duplicatecolumn:3,duplicatecursor:3,duplicatedatabas:3,duplicatefil:3,duplicatefunct:3,duplicatejsonobjectkeyvalu:3,duplicateobject:3,duplicatepreparedstat:3,duplicateschema:3,duplicatet:3,dure:[3,7,9],dynam:[4,6,8],each:[0,2,3],eas:4,easi:4,easiest:7,effect:1,effici:[0,2,9],either:[1,2,9],element:8,els:9,emit:9,empti:[2,7],empty_queri:7,enabl:4,encapsul:9,enclos:1,encod:[0,1,7],encount:3,end:[1,4,9],enough:9,enter:9,entir:9,entri:9,enumer:5,env:7,environ:1,error:[1,4,5,6,7,9],error_messag:7,errorinassign:3,escap:[0,7,8],escape_identifi:8,escapecharacterconflict:3,etc:3,evalu:8,even:[1,2,8,9],eventlet:1,eventtriggerprotocolviol:3,eventu:[1,8],everi:[0,3,7],everyon:5,examin:3,exampl:[3,8,9],exceed:3,except:[1,2,4,5,7,9],exclus:3,exclusionviol:3,execstatu:7,execut:[2,3,4,8,9],executemani:[2,8,9],exist:[3,4,9],exit:[1,2,9],expect:[4,9],explicit:4,explicitli:[1,9],exploit:8,expos:[2,3,4,7,8],express:8,extens:6,extern:3,externalroutineexcept:3,externalroutineinvocationexcept:3,extra:[6,7],extrem:9,f0000:3,f0001:3,facil:9,factori:9,fail:[0,3,7,9],failur:3,fallback:7,fals:1,familiar:5,far:9,fast:[0,7],fatal:7,fatal_error:7,fdwcolumnnamenotfound:3,fdwdynamicparametervalueneed:3,fdwerror:3,fdwfunctionsequenceerror:3,fdwinconsistentdescriptorinform:3,fdwinvalidattributevalu:3,fdwinvalidcolumnnam:3,fdwinvalidcolumnnumb:3,fdwinvaliddatatyp:3,fdwinvaliddatatypedescriptor:3,fdwinvaliddescriptorfieldidentifi:3,fdwinvalidhandl:3,fdwinvalidoptionindex:3,fdwinvalidoptionnam:3,fdwinvalidstringformat:3,fdwinvalidstringlengthorbufferlength:3,fdwinvaliduseofnullpoint:3,fdwnoschema:3,fdwoptionnamenotfound:3,fdwoutofmemori:3,fdwreplyhandl:3,fdwschemanotfound:3,fdwtablenotfound:3,fdwtoomanyhandl:3,fdwunabletocreateexecut:3,fdwunabletocreaterepli:3,fdwunabletoestablishconnect:3,featur:[3,5,7],featurenotsupport:3,fetch:[2,9],fetchal:[2,9],fetchmani:[2,9],fetchon:[2,4,9],few:4,field1:8,field2:8,field3:8,field:[2,3,7,8],file:[3,5,9],fill:9,finalis:[0,9],finish:[2,7],first:9,fix:2,flexibl:4,floatingpointexcept:3,fly:8,follow:[0,1,2,3,6,8,9],foo:8,forc:7,force_rollback:1,foreign:3,foreignkeyviol:3,forgotten:8,form:[8,9],format:[0,1,2,7,8,9],found:3,free:[2,7],from:[0,1,2,3,5,7,8],fulfil:6,full_queri:8,fulli:[0,9],function_nam:4,functionexecutednoreturnstat:3,further:[2,9],gen:9,gener:[1,3,4,8,9],generatedalwai:3,get:[6,9],get_cancel:7,gevent:1,global:[0,8],goe:9,got:9,grantor:3,groupingerror:3,guarante:3,hack:6,hand:3,handi:6,handl:[0,1,3,9],happen:[1,3,7,8,9],hardcod:8,has:[4,5,7,9],have:[0,1,2,3,4,7,8,9],haven:6,header:6,hei:9,held:9,heldcursorrequiressameisolationlevel:3,hello:9,here:9,hierarchi:8,high:0,hoc:8,how:[0,6,9],howev:[4,7,8],hv000:3,hv001:3,hv002:3,hv004:3,hv005:3,hv006:3,hv007:3,hv008:3,hv009:3,hv00a:3,hv00b:3,hv00c:3,hv00d:3,hv00j:3,hv00k:3,hv00l:3,hv00m:3,hv00n:3,hv00p:3,hv00q:3,hv00r:3,hv010:3,hv014:3,hv021:3,hv024:3,hv090:3,hv091:3,hypothet:9,identifi:8,idiomat:3,idl:[7,9],idleintransactionsessiontimeout:3,ignor:9,imagin:1,immedi:[1,9],implement:[0,1,2,4,5,6,9],inaccur:0,inappropriateaccessmodeforbranchtransact:3,inappropriateisolationlevelforbranchtransact:3,includ:[1,3,6,7,8,9],indeterminatecol:3,indeterminatedatatyp:3,index:5,indexcorrupt:3,indicatoroverflow:3,ineffici:8,inerror:7,infailedsqltransact:[3,9],info:1,inform:[2,3,7],inherit:8,initi:[2,3],inject:9,inner:9,inner_tx:9,innermost:9,input:2,insert:[2,8,9],insid:[1,9],inspect:3,inspir:[1,2],instal:[5,7],instanc:[0,1,3,4,6,8,9],instanti:0,instead:[0,1,2,4,6,8,9],instruct:0,insuffici:3,insufficientprivileg:3,insufficientresourc:3,integ:[8,9],integr:[3,5],integrityconstraintviol:3,integrityerror:3,intend:0,inter:2,interact:[4,9],intercept:9,interfac:[0,1,2,3,4,5,7,8,9],interfaceerror:3,intern:[3,9],internal_posit:[3,7],internal_queri:[3,7],internal_s:2,internalerror:3,internalerror_:3,interpol:7,interpos:8,interpret:8,interrupt:9,intervalfieldoverflow:3,intervent:3,intran:7,invalid:[3,8],invalidargumentforlogarithm:3,invalidargumentfornthvaluefunct:3,invalidargumentforntilefunct:3,invalidargumentforpowerfunct:3,invalidargumentforsqljsondatetimefunct:3,invalidargumentforwidthbucketfunct:3,invalidauthorizationspecif:3,invalidbinaryrepresent:3,invalidcatalognam:3,invalidcharactervalueforcast:3,invalidcolumndefinit:3,invalidcolumnrefer:3,invalidcursordefinit:3,invalidcursornam:3,invalidcursorst:3,invaliddatabasedefinit:3,invaliddatetimeformat:3,invalidescapecharact:3,invalidescapeoctet:3,invalidescapesequ:3,invalidforeignkei:3,invalidfunctiondefinit:3,invalidgrantoper:3,invalidgrantor:3,invalidindicatorparametervalu:3,invalidjsontext:3,invalidlocatorspecif:3,invalidnam:3,invalidobjectdefinit:3,invalidparametervalu:3,invalidpassword:3,invalidprecedingorfollowings:3,invalidpreparedstatementdefinit:3,invalidrecurs:3,invalidregularexpress:3,invalidrolespecif:3,invalidrowcountinlimitclaus:3,invalidrowcountinresultoffsetclaus:3,invalidsavepointspecif:3,invalidschemadefinit:3,invalidschemanam:3,invalidsqljsonsubscript:3,invalidsqlstatementnam:3,invalidsqlstatereturn:3,invalidtabledefinit:3,invalidtablesampleargu:3,invalidtablesamplerepeat:3,invalidtextrepresent:3,invalidtimezonedisplacementvalu:3,invalidtransactioniniti:3,invalidtransactionst:3,invalidtransactiontermin:3,invaliduseofescapecharact:3,invalidxmlcom:3,invalidxmlcont:3,invalidxmldocu:3,invalidxmlprocessinginstruct:3,invoc:3,invok:[1,7,8,9],involv:[1,5],ioerror:3,isinst:9,isn:0,item:[2,8],iter:[1,2,8,9],its:[0,2,3,8,9],itself:[2,3,9],join:8,joiner:8,jsonb:4,jump:9,just:2,keep:9,kei:[1,3,9],keyerror:3,keyword:[1,2,8,9],know:[0,6],known:0,kwarg:[1,8],lambda:9,languag:5,last:2,later:8,lazi:0,leav:9,left:8,len:8,less:[1,7,9],let:9,letter:3,level:[0,4,7],libpq5:6,libpq:[4,5,6],librari:[6,7],life:0,lift:9,like:[0,4,8,9],limit:[3,9],line:9,linux:6,list:[0,1,2,8,9],listen:[1,9],liter:[0,8],live:9,load:[0,4,7,9],loader:0,locat:3,locatorexcept:3,lock:[3,9],lockfileexist:3,locknotavail:3,logger:9,look:[0,1],lookup:3,loop:9,low:[4,7],machin:7,made:[1,7,8,9],mai:[2,3,4,6,7,8,9],main:[1,2,9],maintain:6,make:[0,4,9],manag:[0,1,2,4,5],mani:[4,8],manipul:7,manner:9,manual:9,map:[2,8],massiv:2,match:[1,2],mean:[3,6,9],meant:8,meanwhil:9,med:3,memori:3,merg:[2,4,8],messag:[1,6,7,9],message_detail:[3,7],message_hint:[3,7],message_primari:[3,7],metadata:9,method:[0,1,2,3,4,8,9],might:[0,1],miss:9,mode:[2,3,7,9],modern:5,modifi:[8,9],modifyingsqldatanotpermit:3,modifyingsqldatanotpermittedext:3,modul:[3,4,5,6],more:[1,2,5,7,8,9],morethanonesqljsonitem:3,most:[0,6,7,9],mostspecifictypemismatch:3,move:2,move_monei:9,much:[7,9],multipl:8,must:[0,1,2,6,8],my_nam:8,my_tabl:8,mychan:9,mytabl:3,name:[0,1,2,3,8],nametoolong:3,necessari:[0,8],necessarili:3,need:[0,6,7,8,9],neg:9,nest:[1,9],network:[4,7],never:3,new_bal:9,newli:5,next:2,nextset:2,no_attempt:7,no_respons:7,noactivesqltransact:3,noactivesqltransactionforbranchtransact:3,noadditionaldynamicresultsetsreturn:3,nodata:3,nodatafound:3,non:[1,2],none:[0,1,2,3,7,8],nonfat:7,nonfatal_error:7,nonnumericsqljsonitem:3,nonstandarduseofescapecharact:3,nonuniquekeysinajsonobject:3,normal:[2,4,8,9],nosqljsonitem:3,notanxmldocu:3,note:[8,9],notic:[1,7],notif:[1,5],notifi:[1,4,9],notnullviol:3,notsupportederror:3,now:[4,8,9],nowait:3,nullvaluenoindicatorparamet:3,nullvaluenotallow:3,nullvaluenotallowedext:3,num:9,num_ok:9,number:[2,3,7,8,9],numer:[2,3,4],numericvalueoutofrang:3,obj:[0,7,8],object:[3,4,5,9],objectinus:3,objectnotinprerequisitest:3,obtain:[6,9],occur:[3,7],offer:[2,4,7,9],often:8,oid:[0,2],onc:[0,4,6],one:[0,1,2,3,9],ones:[1,3,8,9],onli:[0,1,2,3,4,7,8,9],open:[7,9],oper:[0,1,2,3,4,5,6,7,8],operationalerror:3,operatorintervent:3,opposit:[0,3,8],optim:8,optimis:0,option:[1,2,3,7,9],order:[0,4,6,9],ordinari:7,other:[1,2,3,5,7,8,9],otherwis:[1,2,4,7,8],out:[3,4,7,9],outer:9,outer_tx:9,outermost:9,outofmemori:3,output:9,outsid:9,over:9,overrid:1,p0000:3,p0001:3,p0002:3,p0003:3,p0004:3,packag:[5,6,7],page:[0,5],pair:1,parallel:2,param:2,paramet:[0,1,2,3,4,5,7,8],part:8,particularli:6,pass:[0,1,2,3,5,8],path:[0,6],pattern:[4,9],payload:[1,9],pend:1,peopl:[4,8],per:[0,3],perform:[0,2,4,6,7,9],persist:9,pg_config:6,pg_diag_sever:3,pg_notifi:4,pgcancel:7,pgconn:7,pgresult:[2,7],pgsql:3,phase:[6,7],picklabl:3,pid:[1,9],ping:7,pip:[6,7],pkei:8,place:[6,8],placehold:[0,8,9],platform:7,pleas:[0,3,6,9],plpgsqlerror:3,plu:9,point:[2,9],poll:7,pollingstatu:7,posit:[4,8],possibl:[0,1,2,4,7,8,9],postgr:9,postgresql:[0,1,2,3,4,6,7,8,9],potenti:8,power:9,pq_ctype:7,pqcancel:7,pqconnectpol:7,pqexecparam:0,pqfreecancel:7,pqgetcancel:7,pqlibvers:7,pqpingparam:7,pqresulterrorfield:[3,7],pqresultstatu:7,pqstatu:7,pqtransactionstatu:7,pre:7,preced:2,precis:[2,7],prerequisit:[3,6],presenc:8,present:[5,8],pretti:9,previou:9,previous:[1,9],primari:9,print:[8,9],privileg:3,probabl:[2,6],problem:[3,8],procedur:[4,9],procedure_nam:4,process:[1,3,7,9],process_command:9,produc:[2,9],product:6,program:[1,3,5,6,8,9],programlimitexceed:3,programm:3,programmingerror:3,progress:7,prohibitedsqlstatementattempt:3,prohibitedsqlstatementattemptedext:3,propag:9,proper:5,properti:[1,2],proto:7,protocol:9,protocolviol:3,provid:0,psql:[1,9],psycopg2:[5,9],psycopg3:[1,2,5,6,9],psycopg3_impl:7,psycopg:9,pure:[5,7],pypi:6,python3:6,python:[0,1,4,7,8,9],quadrant:9,qualifi:[0,8],queri:[0,1,2,4,5,7,8],querycancel:3,queryset:2,quick:5,quickest:6,quirk:[1,2],quit:9,quot:[0,8],rais:[1,2,3,4,7,9],raiseexcept:3,rang:[3,4],rather:3,read:[0,1,2,4,6,7,9],readi:7,readingsqldatanotpermit:3,readingsqldatanotpermittedext:3,readm:6,readonlysqltransact:3,realli:8,reason:[8,9],receiv:[1,9],recevi:1,record:[2,4,9],recordset:2,recurs:0,refer:[3,6,9],refus:9,regist:[0,1,3,9],register_binari:0,reject:[4,7],rel:8,relat:3,releas:6,remain:[2,9],remove_notice_handl:1,remove_notify_handl:1,repeat:8,replac:8,replic:7,report:[3,7],repres:[3,8],represent:[0,7],request:[0,7,8],requir:[2,3,6,7,9],reserv:9,reservednam:3,resourc:[2,3,4],respons:7,restrictviol:3,result:[0,2,5,7,8],retriev:[2,9],revert:9,review:2,rewritten:4,right:[0,9],role:3,roll:[1,9],rollback:[1,3,9],rourk:8,routin:3,row:[2,7,9],rowcount:2,rule:[0,3,8],run:[6,7,9],safe:8,same:[0,1,2,7,9],sanitis:0,save_number_of_success:9,savepoint:[1,3,9],savepoint_nam:1,savepointexcept:3,scale:2,scatter:9,schema:[3,8],schema_nam:[3,7],schemaanddatastatementmixingnotsupport:3,scope:0,scratch:0,script:9,search:5,secur:[8,9],see:[1,2,4,7,9],seen:7,select:[2,4,7,8,9],self:[2,6],semant:4,semicolon:4,send:[1,2,4,9],sens:0,sent:[1,2,3,7],separ:[2,4,8],seq:8,sequenc:[2,8,9],sequencegeneratorlimitexceed:3,seri:9,serial:9,serializationfailur:3,seriou:8,server:[0,1,2,3,5,7,9],session:[1,2,9],set:[2,4,7],set_autocommit:1,set_client_encod:1,set_config:4,setter:1,sever:[0,2,3,4,7,9],severity_nonloc:[3,7],share:[1,2],should:[0,1,2,4,6,7,8,9],shouldn:0,show:[7,9],side:[0,3,5],similar:[0,1,4,8],simpl:9,simplest:9,simpli:6,simplist:4,singl:[3,4,7,8],single_tupl:7,singletonsqljsonitemrequir:3,situat:6,size:2,slightli:4,snapshot:3,snapshottooold:3,snip:8,snippet:8,socket:7,some:[2,6,8,9],some_t:8,someth:1,sometim:4,somewhat:8,somewher:8,soon:[1,9],sort:8,sourc:[3,8,9],source_fil:[3,7],source_funct:[3,7],source_lin:[3,7],specif:[0,3,7],specifi:[0,1,2,3,8,9],sql:[0,2,3,4,5,7],sqlclientunabletoestablishsqlconnect:3,sqljsonarraynotfound:3,sqljsonmembernotfound:3,sqljsonnumbernotfound:3,sqljsonobjectnotfound:3,sqljsonscalarrequir:3,sqlroutineexcept:3,sqlserverrejectedestablishmentofsqlconnect:3,sqlstate:[5,7],sqlstatementnotyetcomplet:3,src:0,srfprotocolviol:3,stack:9,stackeddiagnosticsaccessedwithoutactivehandl:3,standard:3,start:[1,6,7,9],state:[0,1,3,6,7,9],statement:[1,2,3,8,9],statement_posit:[3,7],statementcompletionunknown:3,statementtoocomplex:3,statu:7,stdin:9,stdout:9,step:9,still:[3,6,8,9],stop:9,store:9,str:[0,1,2,3,7,8],stream:[7,9],string:[0,1,2,3,5,7],stringdatalengthmismatch:3,stringdatarighttrunc:3,structur:[4,7],stuff:0,style:8,subclass:[3,8],substringerror:3,success:[7,9],successfulli:9,sudo:6,suggest:4,suitabl:[8,9],support:[3,4,5,8,9],suppos:6,sure:9,surpris:[4,9],suspend:9,sync:[1,3,9],syntax:[2,3,4],syntaxerror:[3,4],syntaxerrororaccessruleviol:3,system:[0,3,5,6,7],systemerror:3,tabl:[2,3,8,9],table_nam:[3,7,8,9],take:1,taken:9,target:9,tbl:8,tell:0,templat:8,termin:[2,3,9],test:9,text:[0,1,2,7,8,9],than:[2,3,7,8,9],thei:[0,1,2,3,4,8,9],them:[0,1,4,8,9],thi:[0,1,2,3,4,6,7,8,9],thing:[6,9],though:[2,6],thread:1,three:9,time:[2,8,9],timezon:4,todo:[0,1,2,4,7,9],token:7,too:[2,8],tool:7,toomanyargu:3,toomanycolumn:3,toomanyconnect:3,toomanyjsonarrayel:3,toomanyjsonobjectmemb:3,toomanyrow:3,topic:4,transact:[1,2,3,4,5,7],transactionintegrityconstraintviol:3,transactionresolutionunknown:3,transactionrollback:3,transactionstatu:7,transfer:7,transform:[0,8],transpar:9,trasform:0,tri:4,trigger:3,triggeredactionexcept:3,triggereddatachangeviol:3,triggerprotocolviol:3,trimerror:3,troubleshoot:6,tupl:[2,7,9],tuples_ok:7,two:[0,9],tx1:9,tx2:9,type:[2,3,4,5,8],type_cod:2,unaffect:9,unbalanc:9,uncommit:2,undefin:0,undefinedcolumn:3,undefinedfil:3,undefinedfunct:[3,4],undefinedobject:3,undefinedparamet:3,undefinedt:3,under:3,undergo:8,understood:[0,7],undesir:9,unexpect:3,union:[1,2,7,8],uniqueviol:3,unknown:7,unless:[1,2,9],unlik:7,unpack:2,unregist:1,unreliable_oper:9,unsafenewenumvalueusag:3,unterminatedcstr:3,until:[1,9],untouch:8,untranslatablecharact:3,untrust:8,updat:2,upgrad:6,upon:9,url:1,usabl:7,usag:[4,5],use:[0,1,2,3,4,5,6,7,8,9],used:[0,1,2,3,4,5,6,7,8,9],useful:[0,8],user:9,uses:[1,4],using:[0,1,2,4,7,8,9],usual:[1,3,4,7,8],utc:4,utf8:7,util:[5,7],uuid:[0,4],vacuum:9,valid:3,valu:[0,1,3,7,8,9],valueerror:9,varchar:2,variabl:8,varialb:1,vars_seq:2,verifi:9,version:[0,1,3,7],via:6,view:[0,2],violat:3,visibl:9,wai:[0,2,6,8,9],wait:[7,8],want:[1,2,8,9],warn:[0,3,7],weak:8,were:1,what:[1,2,3,5,9],when:[0,1,2,3,4,7,8,9],whenev:[1,9],where:[0,8,9],which:[0,1,2,3,4,6,7,8,9],who:5,whose:[0,8],windowingerror:3,wise:4,wish:9,withcheckoptionviol:3,within:[0,1],without:[0,6],won:8,work:[4,6,7,8],would:9,wrap:[4,8],wrapper:[1,3,5],writabl:1,write:[1,2,3,4,7,9],write_row:[2,9],wrong:3,wrongobjecttyp:3,xx000:3,xx001:3,xx002:3,yet:[3,6,9],yield:1,you:[0,1,2,3,4,6,7,8,9],your:[0,1,6,8],zero:3,zerolengthcharacterstr:3},titles:["<code class=\"docutils literal notranslate\"><span class=\"pre\">psycopg3.adapt</span></code> \u2013 Data adaptation configuration","Connection classes","Cursor classes","<code class=\"xref py py-obj docutils literal notranslate\"><span class=\"pre\">psycopg3.errors</span></code> \u2013 package exceptions","Differences from psycopg2","Psycopg 3 \u2013 PostgreSQL database adapter for Python","Installation","<code class=\"xref py py-obj docutils literal notranslate\"><span class=\"pre\">psycopg3.pq</span></code> \u2013 Libpq wrapper module","<code class=\"xref py py-obj docutils literal notranslate\"><span class=\"pre\">psycopg3.sql</span></code> \u2013 SQL string composition","Basic module usage"],titleterms:{"class":[1,2],"function":8,"new":4,The:[1,2],Using:9,adapt:[0,4,5],async:9,asyncconnect:1,asynccursor:2,asynchron:9,base:4,basic:9,binari:9,bind:4,block:9,composit:8,configur:0,connect:[1,9],content:7,copi:[4,9],cursor:[2,9],data:0,databas:5,dbapi:3,differ:4,enumer:7,error:3,except:3,file:4,from:[4,9],implement:7,indic:5,instal:6,involv:0,libpq:7,manag:9,modul:[7,8,9],more:4,notif:9,object:[0,1,2,7,8],oper:9,other:4,packag:3,paramet:9,pass:9,postgresql:5,proper:6,psycopg2:4,psycopg3:[0,3,4,7,8],psycopg:5,pure:6,python:[5,6],queri:9,quick:6,result:9,server:4,side:4,sql:[8,9],sqlstate:3,string:8,support:[1,2],system:4,tabl:5,transact:9,type:0,usag:[8,9],util:8,what:4,wrapper:7}})