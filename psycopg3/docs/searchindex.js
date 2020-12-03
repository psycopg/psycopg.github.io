Search.setIndex({docnames:["adapt-types","adaptation","advanced/index","api/index","async","basic/index","connection","copy","cursor","errors","from_pg2","index","install","params","pq","sql","transactions","usage"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,sphinx:56},filenames:["adapt-types.rst","adaptation.rst","advanced/index.rst","api/index.rst","async.rst","basic/index.rst","connection.rst","copy.rst","cursor.rst","errors.rst","from_pg2.rst","index.rst","install.rst","params.rst","pq.rst","sql.rst","transactions.rst","usage.rst"],objects:{"psycopg3.AsyncConnection":{close:[6,1,1,""],commit:[6,1,1,""],connect:[6,1,1,""],cursor:[6,1,1,""],notifies:[6,1,1,""],rollback:[6,1,1,""],set_autocommit:[6,1,1,""],set_client_encoding:[6,1,1,""],transaction:[6,1,1,""]},"psycopg3.AsyncCopy":{read:[8,1,1,""],write:[8,1,1,""],write_row:[8,1,1,""]},"psycopg3.AsyncCursor":{close:[8,1,1,""],connection:[8,2,1,""],copy:[8,1,1,""],execute:[8,1,1,""],executemany:[8,1,1,""],fetchall:[8,1,1,""],fetchmany:[8,1,1,""],fetchone:[8,1,1,""]},"psycopg3.Column":{display_size:[8,1,1,""],internal_size:[8,1,1,""],name:[8,1,1,""],precision:[8,1,1,""],scale:[8,1,1,""],type_code:[8,1,1,""]},"psycopg3.Connection":{add_notice_handler:[6,1,1,""],add_notify_handler:[6,1,1,""],autocommit:[6,2,1,""],cancel:[6,1,1,""],client_encoding:[6,2,1,""],close:[6,1,1,""],closed:[6,2,1,""],commit:[6,1,1,""],connect:[6,1,1,""],cursor:[6,1,1,""],info:[6,2,1,""],notifies:[6,1,1,""],remove_notice_handler:[6,1,1,""],remove_notify_handler:[6,1,1,""],rollback:[6,1,1,""],transaction:[6,1,1,""]},"psycopg3.Copy":{read:[8,1,1,""],write:[8,1,1,""],write_row:[8,1,1,""]},"psycopg3.Cursor":{close:[8,1,1,""],closed:[8,2,1,""],connection:[8,2,1,""],copy:[8,1,1,""],description:[8,2,1,""],execute:[8,1,1,""],executemany:[8,1,1,""],fetchall:[8,1,1,""],fetchmany:[8,1,1,""],fetchone:[8,1,1,""],nextset:[8,1,1,""],params:[8,2,1,""],pgresult:[8,2,1,""],query:[8,2,1,""],rowcount:[8,2,1,""]},"psycopg3.Notify":{channel:[6,2,1,""],payload:[6,2,1,""],pid:[6,2,1,""]},"psycopg3.Transaction":{connection:[6,2,1,""],savepoint_name:[6,1,1,""]},"psycopg3.adapt":{Dumper:[1,0,1,""],Loader:[1,0,1,""],Transformer:[1,0,1,""]},"psycopg3.adapt.Dumper":{dump:[1,1,1,""],oid:[1,2,1,""],quote:[1,1,1,""],register:[1,1,1,""]},"psycopg3.adapt.Loader":{load:[1,1,1,""],register:[1,1,1,""]},"psycopg3.errors":{DataError:[9,3,1,""],DatabaseError:[9,3,1,""],Diagnostic:[9,0,1,""],Error:[9,3,1,""],IntegrityError:[9,3,1,""],InterfaceError:[9,3,1,""],InternalError:[9,3,1,""],NotSupportedError:[9,3,1,""],OperationalError:[9,3,1,""],ProgrammingError:[9,3,1,""],Warning:[9,3,1,""],lookup:[9,5,1,""]},"psycopg3.errors.Diagnostic":{column_name:[9,2,1,""],constraint_name:[9,2,1,""],context:[9,2,1,""],datatype_name:[9,2,1,""],internal_position:[9,2,1,""],internal_query:[9,2,1,""],message_detail:[9,2,1,""],message_hint:[9,2,1,""],message_primary:[9,2,1,""],schema_name:[9,2,1,""],severity:[9,2,1,""],severity_nonlocalized:[9,2,1,""],source_file:[9,2,1,""],source_function:[9,2,1,""],source_line:[9,2,1,""],sqlstate:[9,2,1,""],statement_position:[9,2,1,""],table_name:[9,2,1,""]},"psycopg3.errors.Error":{diag:[9,2,1,""]},"psycopg3.pq":{ConnStatus:[14,0,1,""],Conninfo:[14,0,1,""],DiagnosticField:[14,0,1,""],Escaping:[14,0,1,""],ExecStatus:[14,0,1,""],Format:[14,0,1,""],PGcancel:[14,0,1,""],PGconn:[14,0,1,""],PGresult:[14,0,1,""],Ping:[14,0,1,""],PollingStatus:[14,0,1,""],TransactionStatus:[14,0,1,""],__impl__:[14,6,1,""],error_message:[14,5,1,""],version:[14,5,1,""]},"psycopg3.pq.ConnStatus":{BAD:[14,2,1,""],OK:[14,2,1,""]},"psycopg3.pq.DiagnosticField":{COLUMN_NAME:[14,2,1,""],CONSTRAINT_NAME:[14,2,1,""],CONTEXT:[14,2,1,""],DATATYPE_NAME:[14,2,1,""],INTERNAL_POSITION:[14,2,1,""],INTERNAL_QUERY:[14,2,1,""],MESSAGE_DETAIL:[14,2,1,""],MESSAGE_HINT:[14,2,1,""],MESSAGE_PRIMARY:[14,2,1,""],SCHEMA_NAME:[14,2,1,""],SEVERITY:[14,2,1,""],SEVERITY_NONLOCALIZED:[14,2,1,""],SOURCE_FILE:[14,2,1,""],SOURCE_FUNCTION:[14,2,1,""],SOURCE_LINE:[14,2,1,""],SQLSTATE:[14,2,1,""],STATEMENT_POSITION:[14,2,1,""],TABLE_NAME:[14,2,1,""]},"psycopg3.pq.ExecStatus":{BAD_RESPONSE:[14,2,1,""],COMMAND_OK:[14,2,1,""],COPY_BOTH:[14,2,1,""],COPY_IN:[14,2,1,""],COPY_OUT:[14,2,1,""],EMPTY_QUERY:[14,2,1,""],FATAL_ERROR:[14,2,1,""],NONFATAL_ERROR:[14,2,1,""],SINGLE_TUPLE:[14,2,1,""],TUPLES_OK:[14,2,1,""]},"psycopg3.pq.Format":{BINARY:[14,2,1,""],TEXT:[14,2,1,""]},"psycopg3.pq.PGcancel":{cancel:[14,1,1,""],free:[14,1,1,""]},"psycopg3.pq.PGconn":{get_cancel:[14,1,1,""]},"psycopg3.pq.Ping":{NO_ATTEMPT:[14,2,1,""],NO_RESPONSE:[14,2,1,""],OK:[14,2,1,""],REJECT:[14,2,1,""]},"psycopg3.pq.PollingStatus":{FAILED:[14,2,1,""],OK:[14,2,1,""],READING:[14,2,1,""],WRITING:[14,2,1,""]},"psycopg3.pq.TransactionStatus":{ACTIVE:[14,2,1,""],IDLE:[14,2,1,""],INERROR:[14,2,1,""],INTRANS:[14,2,1,""],UNKNOWN:[14,2,1,""]},"psycopg3.sql":{Composable:[15,0,1,""],Composed:[15,0,1,""],DEFAULT:[15,6,1,""],Identifier:[15,0,1,""],Literal:[15,0,1,""],NULL:[15,6,1,""],Placeholder:[15,0,1,""],SQL:[15,0,1,""],quote:[15,5,1,""]},"psycopg3.sql.Composable":{as_string:[15,1,1,""]},"psycopg3.sql.Composed":{join:[15,1,1,""]},"psycopg3.sql.SQL":{format:[15,1,1,""],join:[15,1,1,""]},psycopg3:{AsyncConnection:[6,0,1,""],AsyncCopy:[8,0,1,""],AsyncCursor:[8,0,1,""],AsyncTransaction:[6,0,1,""],Column:[8,0,1,""],Connection:[6,0,1,""],Copy:[8,0,1,""],Cursor:[8,0,1,""],Notify:[6,0,1,""],Rollback:[6,3,1,""],Transaction:[6,0,1,""],errors:[9,4,0,"-"],pq:[14,4,0,"-"],sql:[15,4,0,"-"]}},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","attribute","Python attribute"],"3":["py","exception","Python exception"],"4":["py","module","Python module"],"5":["py","function","Python function"],"6":["py","data","Python data"]},objtypes:{"0":"py:class","1":"py:method","2":"py:attribute","3":"py:exception","4":"py:module","5":"py:function","6":"py:data"},terms:{"02000":9,"02001":9,"03000":9,"08000":9,"08001":9,"08003":9,"08004":9,"08006":9,"08007":9,"08p01":9,"09000":9,"0a000":9,"0b000":9,"0f000":9,"0f001":9,"0l000":9,"0lp01":9,"0p000":9,"0z000":9,"0z002":9,"100":[4,16,17],"20000":9,"2020":13,"21000":9,"2200":9,"22000":9,"22001":9,"22002":9,"22003":9,"22004":9,"22005":9,"22007":9,"22008":9,"22009":9,"2200b":9,"2200c":9,"2200d":9,"2200f":9,"2200g":9,"2200h":9,"2200l":9,"2200m":9,"2200n":9,"2200t":9,"22010":9,"22011":9,"22012":9,"22013":9,"22014":9,"22015":9,"22016":9,"22018":9,"22019":9,"2201b":9,"2201e":9,"2201f":9,"2201g":9,"2201w":9,"2201x":9,"22021":9,"22022":9,"22023":9,"22024":9,"22025":9,"22026":9,"22027":9,"2202e":9,"2202g":9,"2202h":9,"22030":9,"22031":9,"22032":9,"22033":9,"22034":9,"22035":9,"22036":9,"22037":9,"22038":9,"22039":9,"2203a":9,"2203b":9,"2203c":9,"2203d":9,"2203e":9,"2203f":9,"22p01":9,"22p02":9,"22p03":9,"22p04":9,"22p05":9,"22p06":9,"23000":9,"23001":9,"23502":9,"23503":9,"23505":9,"23514":9,"23p01":9,"24000":9,"25000":9,"25001":9,"25002":9,"25003":9,"25004":9,"25005":9,"25006":9,"25007":9,"25008":9,"25p01":9,"25p02":9,"25p03":9,"26000":9,"27000":9,"28000":9,"28p01":9,"2b000":9,"2bp01":9,"2d000":9,"2f000":9,"2f002":9,"2f003":9,"2f004":9,"2f005":9,"34000":9,"38000":9,"38001":9,"38002":9,"38003":9,"38004":9,"39000":9,"39001":9,"39004":9,"39p01":9,"39p02":9,"39p03":9,"3b000":9,"3b001":9,"3d000":9,"3f000":9,"40000":9,"40001":9,"40002":9,"40003":9,"40p01":9,"42000":9,"42501":9,"42601":9,"42602":9,"42611":9,"42622":9,"42701":9,"42702":9,"42703":9,"42704":9,"42710":9,"42712":9,"42723":9,"42725":9,"42803":9,"42804":9,"42809":9,"42830":9,"42846":9,"42883":9,"428c9":9,"42939":9,"42p01":9,"42p02":9,"42p03":9,"42p04":9,"42p05":9,"42p06":9,"42p07":9,"42p08":9,"42p09":9,"42p10":9,"42p11":9,"42p12":9,"42p13":9,"42p14":9,"42p15":9,"42p16":9,"42p17":9,"42p18":9,"42p19":9,"42p20":9,"42p21":9,"42p22":9,"44000":9,"53000":9,"53100":9,"53200":9,"53300":9,"53400":9,"54000":9,"54001":9,"54011":9,"54023":9,"55000":9,"55006":9,"55p02":9,"55p03":9,"55p04":9,"57000":9,"57014":9,"57p01":9,"57p02":9,"57p03":9,"57p04":9,"58000":9,"58030":9,"58p01":9,"58p02":9,"72000":9,"961823":4,"abstract":[1,15],"break":13,"byte":[0,1,7,8,14],"case":[0,1,4,6,8,9,10,15,16],"catch":9,"class":[1,3,9,10,14,15,17],"default":[0,1,8,15,16],"export":14,"final":1,"float":[0,1,13],"function":[0,1,4,9,10,11,13,16,17],"import":[1,4,9,14,15,16,17],"int":[0,1,6,8,13,14],"long":16,"na\u00efv":13,"new":[6,8,14,15,16,17],"null":15,"return":[0,1,4,6,7,8,9,10,13,14,15,17],"throw":10,"true":[0,4,6,8,9],"try":[1,6,9,12,14,16],"var":14,"while":[7,13],But:16,For:[1,4,6,7,9,13,16],INTO:[4,13,17],Its:8,Not:9,One:6,That:4,The:[0,1,4,7,9,10,12,13,14,15,16,17],There:[9,10,14],These:9,Use:[10,15],Using:[1,2,8,10,13,17],WILL:13,WITH:9,Will:14,__del__:14,__impl__:14,a_dat:13,a_str:13,abandon:14,abc:[4,17],abl:[4,6,12],abort:16,about:[0,4,6,8,13],abov:[6,12],absolut:15,accept:[6,10,13,14],access:[9,10,11,13],accid:[15,16],accord:[9,15],account1:16,account2:16,account:[10,16],achiev:8,aconn:4,act:4,action:[9,16],activ:[14,16],activesqltransact:9,actual:14,acur:4,adapt:[2,5,7,8,13,15,17],add:[0,13],add_notice_handl:[6,9],add_notify_handl:[4,6],add_to_bal:16,added:15,address:10,adminshutdown:9,advanc:11,advis:12,affect:[6,8,9],after:[6,8,9],again:14,aka:0,alias:6,all:[1,6,8,9,12,13,14,15,16,17],alloc:9,allow:[1,4,7,9,11,13,15,16,17],almost:4,alpin:12,alreadi:[7,9],also:[0,1,6,8,9,10,13,15,16],alter:8,altern:[4,10],alwai:13,ambiguousalia:9,ambiguouscolumn:9,ambiguousfunct:9,ambiguousparamet:9,amount:16,an_int:13,ani:[1,6,7,8,10,11,13,15,16],anoth:13,another_d:13,anymor:9,anyth:0,api:[1,11,17],appear:[13,14],applic:[1,14],approach:13,appropri:13,apt:12,arg:[8,15],argument:[1,6,14,15],around:14,arrai:[0,1,10],arrays:8,arraysubscripterror:9,arriv:0,artist:13,as_str:15,assertfailur:9,associ:8,assum:1,async:[2,6,7,8,10],asyncconnect:[4,7,8,17],asynccopi:8,asynccursor:[4,6],asynchron:[6,7,8,11],asyncio:[4,6,8,10,17],asynciter:6,asynctransact:6,attach:6,attack:13,attempt:14,attribut:[1,9,14,16],author:[9,13],auto:15,autocommit:[4,6],automat:[6,8,10,13,14,15],avail:[1,8,9,12,14],avali:15,avoid:16,awai:13,await:[4,6,7,8],awar:10,back:[0,6,16],backend:6,bad:[13,14],bad_respons:14,badcopyfileformat:9,balaclava:13,balanc:16,bank:16,bar:[13,15],base:[1,9,15],baseconnect:15,basecursor:15,basic:[4,5],batch:15,baz:15,becaus:[4,7,10,13,15,16],been:[1,10,12,14],beer:13,befor:[1,13,14,15],behav:[6,8,10],behaviour:[6,8,10,16],being:16,below:9,best:[8,14],better:[8,14],bettern:12,between:[1,5,9,12,13,16,17],bigint:[0,10],binari:[1,7,8,11,12,14],bind:[11,12,13],bit:13,bloat:16,block:[4,6,7,8,10,17],bool:[0,6,8],both:4,bought:13,bound:[12,13],box:10,branchtransactionalreadyact:9,broken:14,bubbl:16,buffer:8,build:[1,12],built:14,builtin:[1,10,17],bundl:14,burn:1,bytea:[0,10],cach:15,cake:1,call:[1,6,8,9,10,13,16],callabl:6,callback:[4,6,9],camelcas:9,can:[0,1,4,6,7,8,9,10,12,13,14,15,16,17],cancel:[6,14,16],cancelcommand:16,cannot:[4,10,15,16],cannotcoerc:9,cannotconnectnow:9,cantchangeruntimeparam:9,car:1,card:13,cardin:9,cardinalityviol:9,care:[6,8,13],casenotfound:9,cast:[0,1,10],cat:13,catalog:9,caus:[0,9,16],cds:13,certain:[0,1,10],chain:8,chanc:16,chang:[1,6,9,12,16,17],channel:[4,6],charact:[13,15],characternotinrepertoir:9,check:[6,9,10],checkviol:9,choic:[0,1,12,14],choos:13,chosen:6,cidr:0,clash:9,classic:[6,8],classmethod:[1,6],clearli:15,client:[1,6,9,10,12,14],client_encod:6,close:[4,6,8,10,14,17],code:[9,13,16],codec:6,col1:7,col2:7,collationmismatch:9,column:8,column_nam:[9,14],come:[7,9,13,15],comma:[13,15],command:[4,6,7,8,10,13,14,16,17],command_ok:14,commit:[4,6,16,17],common:[10,15,17],commun:[4,11,14],comp:15,compar:[6,16],compat:9,compil:[12,14],complet:[0,9,10,14,16],complianc:9,compliant:[6,8],compos:[8,10,15],composit:[0,1,3,13],comput:13,con:13,concaten:13,conclud:7,concret:1,concurr:6,condens:4,condit:[9,16],configfileerror:9,configur:[0,2,6,8,9,10],configurationlimitexceed:9,conn:[4,6,8,14,15,16,17],connect:[1,3,8,9,14,15,16,17],connection_timeout:6,connectiondoesnotexist:9,connectionexcept:9,connectionfailur:9,conninfo:[6,14],connstatu:14,consequ:[1,4,16],consid:[8,10],constant:[14,15],constraint:9,constraint_nam:[9,14],construct:10,constructor:6,consum:[4,7],contact:14,contain:[1,4,6,10,12,13,14,15],containingsqlnotpermit:9,content:[2,3,5],context:[1,4,6,8,9,10,14,15,17],continu:[6,13,16],control:[9,16],conveni:15,convers:[1,17],convert:[0,1,8,9,13,15],cool:6,copi:[2,8,11,14,15],copy_both:14,copy_expert:10,copy_in:14,copy_out:14,core:1,coroutin:[6,8],correct:[13,17],could:[0,7,9,13,14],counterpart:[0,4],countri:13,cours:0,cover:7,craft:13,crash:15,crashshutdown:9,creat:[0,1,8,13,14,15,16,17],creativ:[7,8],credit:13,ctype:[12,14],cur:[0,4,8,9,10,13,15,17],current:[6,8,12,14,16],current_d:0,cursor:[1,3,6,7,9,10,13,15,16,17],custom:10,customis:1,cython:14,danger:15,data:[0,2,4,7,8,9,10,13,14,17],databas:[1,4,6,7,8,9,10,13,15,16,17],databasedrop:9,databaseerror:9,datacorrupt:9,dataerror:9,dataexcept:9,datatype_nam:[9,14],datatypemismatch:9,date:[0,1,10,13],datetim:[0,8,13],datetimefieldoverflow:9,dbapi:[6,8,9,10],dbname:[4,17],deadlockdetect:9,deal:[14,17],dealt:10,debian:12,debug:12,decim:[0,8],decod:[7,14],def:[4,16,17],defin:9,delimit:13,depend:9,dependentobjectsstillexist:9,dependentprivilegedescriptorsstillexist:9,deriv:9,describ:[1,8,12],descript:[8,14],descriptor:9,design:[4,11],desk:13,destruct:13,detail:[6,7,8,9,10,13,14],dev:12,develop:[12,14],diag:9,diagnost:[6,9],diagnosticfield:14,diagnosticsexcept:9,dict:0,dictionari:13,didn:[1,8],differ:[1,6,9,11,13,15,17],digit:8,direct:11,directli:15,disallow:14,disambigu:9,discard:[7,16],disconnect:9,disk:13,diskful:9,dispatch:1,display_s:8,distinct:[1,10],divis:9,division_by_zero:9,divisionbyzero:9,document:[0,1,4,9,14],doe:[0,10],doesn:[1,7,10,12,14,15],don:[1,4,8,12,13,14],dot:15,doubl:[0,4,13,15],down:16,drink:13,dump:1,duplicatealia:9,duplicatecolumn:9,duplicatecursor:9,duplicatedatabas:9,duplicatefil:9,duplicatefunct:9,duplicatejsonobjectkeyvalu:9,duplicateobject:9,duplicatepreparedstat:9,duplicateschema:9,duplicatet:9,dure:[4,9,14],dynam:[10,12,13,15],each:[1,8,9,17],eas:[0,10],easi:10,easiest:14,easili:13,effect:6,effici:[1,7,8],either:[6,8,13,16],element:[13,15],els:16,embarrass:13,emit:7,empti:[8,10,14],empty_queri:14,enabl:10,encapsul:17,enclos:6,encod:[1,6,14],encount:9,end:[6,10,16,17],enough:7,enter:16,entir:16,env:14,environ:6,equal:13,equival:[0,13],error:[0,3,6,10,12,13,14,16],error_messag:14,errorinassign:9,escap:[1,13,14,15],escape_identifi:15,escapecharacterconflict:9,etc:9,evalu:15,even:[6,8,13,15,16,17],eventlet:6,eventtriggerprotocolviol:9,eventu:[6,15],ever:13,everi:[1,9,14],everyon:11,examin:9,exampl:[1,4,9,10,13,15,16,17],exceed:9,except:[3,6,7,8,10,14,16],exclus:9,exclusionviol:9,execstatu:14,execut:[0,4,8,9,10,15,16,17],executemani:[8,15,17],exist:[0,9,10,17],exit:[6,7,8],expect:[0,4,10,16],explicit:10,explicitli:[6,16],exploit:15,expos:[8,9,10,14,15],express:15,extens:12,extern:9,externalroutineexcept:9,externalroutineinvocationexcept:9,extra:[12,14],extrem:16,f0000:9,f0001:9,facil:4,factori:4,fail:[1,9,10,13,14,16],failur:9,fallback:14,fals:[0,6],familiar:11,far:7,fast:[1,14],fatal:14,fatal_error:14,fdwcolumnnamenotfound:9,fdwdynamicparametervalueneed:9,fdwerror:9,fdwfunctionsequenceerror:9,fdwinconsistentdescriptorinform:9,fdwinvalidattributevalu:9,fdwinvalidcolumnnam:9,fdwinvalidcolumnnumb:9,fdwinvaliddatatyp:9,fdwinvaliddatatypedescriptor:9,fdwinvaliddescriptorfieldidentifi:9,fdwinvalidhandl:9,fdwinvalidoptionindex:9,fdwinvalidoptionnam:9,fdwinvalidstringformat:9,fdwinvalidstringlengthorbufferlength:9,fdwinvaliduseofnullpoint:9,fdwnoschema:9,fdwoptionnamenotfound:9,fdwoutofmemori:9,fdwreplyhandl:9,fdwschemanotfound:9,fdwtablenotfound:9,fdwtoomanyhandl:9,fdwunabletocreateexecut:9,fdwunabletocreaterepli:9,fdwunabletoestablishconnect:9,featur:[9,11,13,14],featurenotsupport:9,fetch:8,fetchal:[8,17],fetchmani:[8,17],fetchon:[4,8,10,17],few:[10,13,17],field1:15,field2:15,field3:15,field:[8,9,13,14,15],file:[7,9],fill:17,finalis:[1,16],find:[1,13],finish:[8,14],first:7,fix:8,flaot4:0,flexibl:10,float8:0,floatingpointexcept:9,fly:15,follow:[0,1,4,6,8,9,12,15,16],foo:[13,15],forc:14,force_rollback:6,foreign:[9,13],foreignkeyviol:9,forgotten:15,form:[4,10,13,15],format:[1,6,7,8,13,14,15],found:9,free:[8,10,14,17],fridg:13,from:[1,2,4,6,8,9,11,13,14,15,16,17],fulfil:12,full_queri:15,fulli:[1,7],function_nam:10,functionexecutednoreturnstat:9,further:[8,16],gain:13,gen:4,gener:[4,6,9,10,13,15],generatedalwai:9,get:[0,4,11,12],get_cancel:14,gevent:6,global:[1,15],goe:16,got:4,grantor:9,great:11,groupingerror:9,guarante:9,gui:13,hack:12,hacker:13,hand:9,handi:12,handl:[4,6,9,16],hang:13,happen:[6,9,13,14,15,16],hardcod:15,has:[1,10,11,14,16],have:[1,4,6,8,9,10,13,14,15,16,17],haven:12,header:12,hei:4,held:16,heldcursorrequiressameisolationlevel:9,hello:4,here:[4,16,17],hierarchi:15,high:1,hoc:15,how:[1,4,12,13,17],howev:[10,14,15],hstore:0,hv000:9,hv001:9,hv002:9,hv004:9,hv005:9,hv006:9,hv007:9,hv008:9,hv009:9,hv00a:9,hv00b:9,hv00c:9,hv00d:9,hv00j:9,hv00k:9,hv00l:9,hv00m:9,hv00n:9,hv00p:9,hv00q:9,hv00r:9,hv010:9,hv014:9,hv021:9,hv024:9,hv090:9,hv091:9,hypothet:16,identifi:[13,15],idiomat:9,idl:[14,16],idleintransactionsessiontimeout:9,ignor:16,imagin:6,immedi:[4,6],implement:[1,6,8,10,12,16,17],impli:0,inaccur:1,inappropriateaccessmodeforbranchtransact:9,inappropriateisolationlevelforbranchtransact:9,includ:[6,9,12,13,14,15,16],indeterminatecol:9,indeterminatedatatyp:9,index:[5,11],indexcorrupt:9,indicatoroverflow:9,ineffici:15,inerror:14,inet:0,infailedsqltransact:[9,16],infer:1,infin:1,info:6,inform:[8,9,14],inherit:15,initi:[8,9],inject:17,inner:16,inner_tx:16,innermost:16,input:8,insert:[0,4,7,8,13,15,17],insid:[6,7,13,16],inspect:9,inspir:[6,8],instal:[5,14],instanc:[1,4,6,7,9,10,12,13,15,16,17],instanti:1,instead:[0,4,6,7,8,10,12,13,15,17],instruct:1,insuffici:9,insufficientprivileg:9,insufficientresourc:9,int2:0,int4:[0,10],int8:0,integ:[0,10,13,15,17],integr:[9,11],integrityconstraintviol:9,integrityerror:9,intend:1,inter:8,interact:[4,10,16,17],intercept:16,interfac:[1,4,6,8,9,10,11,14,15],interfaceerror:9,intern:[9,16],internal_posit:[9,14],internal_queri:[9,14],internal_s:8,internalerror:9,internalerror_:9,interpol:14,interpos:15,interpret:15,interrupt:7,interv:0,intervalfieldoverflow:9,intervent:9,intran:14,invalid:[9,15],invalidargumentforlogarithm:9,invalidargumentfornthvaluefunct:9,invalidargumentforntilefunct:9,invalidargumentforpowerfunct:9,invalidargumentforsqljsondatetimefunct:9,invalidargumentforwidthbucketfunct:9,invalidauthorizationspecif:9,invalidbinaryrepresent:9,invalidcatalognam:9,invalidcharactervalueforcast:9,invalidcolumndefinit:9,invalidcolumnrefer:9,invalidcursordefinit:9,invalidcursornam:9,invalidcursorst:9,invaliddatabasedefinit:9,invaliddatetimeformat:9,invalidescapecharact:9,invalidescapeoctet:9,invalidescapesequ:9,invalidforeignkei:9,invalidfunctiondefinit:9,invalidgrantoper:9,invalidgrantor:9,invalidindicatorparametervalu:9,invalidjsontext:9,invalidlocatorspecif:9,invalidnam:9,invalidobjectdefinit:9,invalidparametervalu:9,invalidpassword:9,invalidprecedingorfollowings:9,invalidpreparedstatementdefinit:9,invalidrecurs:9,invalidregularexpress:9,invalidrolespecif:9,invalidrowcountinlimitclaus:9,invalidrowcountinresultoffsetclaus:9,invalidsavepointspecif:9,invalidschemadefinit:9,invalidschemanam:9,invalidsqljsonsubscript:9,invalidsqlstatementnam:9,invalidsqlstatereturn:9,invalidtabledefinit:9,invalidtablesampleargu:9,invalidtablesamplerepeat:9,invalidtextrepresent:9,invalidtimezonedisplacementvalu:9,invalidtransactioniniti:9,invalidtransactionst:9,invalidtransactiontermin:9,invaliduseofescapecharact:9,invalidxmlcom:9,invalidxmlcont:9,invalidxmldocu:9,invalidxmlprocessinginstruct:9,invoc:9,invok:[4,6,14,15],involv:[6,10],ioerror:9,ipaddress:0,isinst:16,isn:1,item:[8,15],iter:[6,7,8,15,17],its:[1,8,9,15,16],itself:[8,9,13],join:15,joiner:15,json:0,jsonb:10,jump:16,just:8,keep:[4,16],kei:[6,9,17],keyerror:9,keyword:[4,6,8,15],know:[1,12,13],known:[1,13],kwarg:[6,15],lambda:4,languag:11,larger:0,last:8,later:15,lazi:1,leav:[4,13,16],left:[13,15],len:15,less:[4,6,14],let:17,letter:9,level:[1,10,14],libpq5:12,libpq:[3,10,11],librari:[12,14],like:[1,15,16],limit:[7,9],line:16,linux:12,list:[0,1,6,7,8,10,15,17],listen:[4,6],liter:[1,13,15],live:16,load:[1,7,10,14],locat:9,locatorexcept:9,lock:[9,16],lockfileexist:9,locknotavail:9,logger:16,look:[1,6,13],lookup:9,loop:16,loss:0,low:[10,14],machin:14,made:[6,14,15,16],mai:[0,1,4,8,9,10,12,13,14,15,16],main:[6,8],maintain:12,make:[1,10,16,17],malform:13,manag:[1,4,5,6,8,10,17],mani:[0,10,13,15],manipul:[0,13,14],manner:4,manual:[4,13,16],map:[0,8,13,15],massiv:8,match:[6,8],mean:[9,12,16],meant:15,meanwhil:4,mechan:13,med:9,memo:13,memori:9,merg:[8,10,13,15],messag:[4,6,12,14,16],message_detail:[9,14],message_hint:[9,14],message_primari:[9,14],metadata:7,method:[1,4,6,7,8,9,10,13,15,17],might:[1,6],miser:13,miss:7,mix:13,mode:[4,8,9,14],modern:11,modifi:[7,15],modifyingsqldatanotpermit:9,modifyingsqldatanotpermittedext:9,modul:[3,5,9,10,11,12,13],more:[6,8,11,13,14,15,16],morethanonesqljsonitem:9,most:[1,7,12,13,14],mostspecifictypemismatch:9,move:[1,8],move_monei:16,much:[4,7,14],multipl:15,muse:0,must:[1,6,8,10,12,13,15],my_nam:15,my_tabl:15,mychan:4,mytabl:9,name:[1,6,8,9,12,13,15],namedtupl:0,nametoolong:9,necessari:[1,15],necessarili:9,need:[1,4,12,13,14,15,16],neg:16,nest:[6,16],network:[10,14],never:[9,13],new_bal:16,newli:11,next:8,nextset:8,no_attempt:14,no_respons:14,noactivesqltransact:9,noactivesqltransactionforbranchtransact:9,noadditionaldynamicresultsetsreturn:9,nodata:9,nodatafound:9,non:[6,8],none:[1,6,8,9,14,15],nonfat:14,nonfatal_error:14,nonnumericsqljsonitem:9,nonstandarduseofescapecharact:9,nonuniquekeysinajsonobject:9,normal:[4,7,8,10,15],nosqljsonitem:9,notanxmldocu:9,note:[0,4,10,13,15],notic:[6,14,17],notif:6,notifi:[4,6,10],notnullviol:9,notsupportederror:9,now:[10,13,15,16],nowait:9,nullvaluenoindicatorparamet:9,nullvaluenotallow:9,nullvaluenotallowedext:9,num:[4,17],num_ok:16,number:[8,9,10,13,14,15,16],numer:[0,1,8,9,10],numericvalueoutofrang:9,obj:[1,14,15],object:[0,4,7,9,10,13],objectinus:9,objectnotinprerequisitest:9,obtain:[12,17],occur:[9,14],offer:[4,7,8,10,14],often:[13,15],oid:[1,8],onc:[1,10,12],one:[1,4,6,7,8,9,13],ones:[4,6,9,13,15],onli:[1,4,6,8,9,10,13,14,15,16],onto:13,open:[7,14,17],oper:[0,1,2,6,7,8,9,10,12,13,14,15,16,17],operationalerror:9,operatorintervent:9,opposit:[1,9,15],optim:15,optimis:1,option:[6,7,8,9,14],order:[1,4,7,10,12,13],ordinari:14,orient:13,other:[0,4,6,8,9,10,11,14,15,16,17],otherwis:[6,8,10,14,15],out:[7,9,10,14,16],outer:16,outer_tx:16,outermost:16,outofmemori:9,output:4,outsid:16,over:7,overflow:0,overrid:[1,6],p0000:9,p0001:9,p0002:9,p0003:9,p0004:9,packag:[3,12,14],page:[1,5,11,13],pair:6,paper:13,parallel:8,param:8,paramet:[1,5,6,7,8,9,10,11,14,15,16,17],params_seq:8,part:15,particularli:12,pass:[0,1,5,6,8,9,10,15,17],path:[1,12],pattern:[7,10,17],payload:[4,6],pend:6,peopl:[10,15],per:[1,9],perfectli:4,perform:[0,1,7,8,10,12,13,14,16,17],persist:17,pg10:14,pg_config:12,pg_diag_sever:9,pg_notifi:10,pgcancel:14,pgconn:14,pgresult:[8,14],pgsql:9,phase:[12,14],picklabl:9,pid:[4,6],ping:14,pip:[12,14],pkei:15,place:[12,13,15],placehold:[13,15,17],platform:14,pleas:[1,4,9,12,13],plpgsqlerror:9,plu:16,point:[8,13],poll:14,pollingstatu:14,posit:[10,13,15],possibl:[1,6,8,10,14,15,16],postgr:[4,17],postgresql:[1,4,5,6,7,8,9,10,12,14,15,17],potenti:15,power:7,pqcancel:14,pqconnectpol:14,pqexecparam:1,pqfreecancel:14,pqgetcancel:14,pqlibvers:14,pqpingparam:14,pqresulterrorfield:[9,14],pqresultstatu:14,pqstatu:14,pqtransactionstatu:14,pre:14,preced:8,precis:[0,8,14],prefer:0,prerequisit:[9,12],presenc:15,present:[11,15],pretti:[4,7],previou:[7,16],previous:[6,16],primari:17,print:[4,13,15,17],privileg:9,probabl:[8,12,13],problem:[0,9,13,15],procedur:[10,16],procedure_nam:10,process:[4,6,9,14,16],process_command:16,produc:[7,8],product:12,program:[6,9,11,12,13,15,16],programlimitexceed:9,programm:9,programmingerror:9,progress:14,prohibitedsqlstatementattempt:9,prohibitedsqlstatementattemptedext:9,promot:0,propag:16,properti:[1,6,8],proto:14,protocol:[7,17],protocolviol:9,provid:[1,13],psql:[4,6,16],psycopg2:[11,17],psycopg3:[1,4,6,7,8,9,11,13,14,15,16],psycopg3_impl:14,psycopg:[0,1,4,12,13,17],pure:14,pypi:12,python3:12,python:[1,4,5,6,7,10,13,14,15,17],quadrant:7,qualifi:[1,15],queri:[0,1,4,5,6,7,8,10,14,15,17],querycancel:9,queryset:8,quickest:12,quirk:[6,8,14],quit:4,quot:[1,13,15],rais:[6,7,8,9,10,14,16],raiseexcept:9,rang:[0,9,10],rather:9,read:[1,6,7,8,10,12,14],readi:14,readingsqldatanotpermit:9,readingsqldatanotpermittedext:9,readm:12,readonlysqltransact:9,real:0,realli:[13,15],reason:[0,15,16],receiv:[0,4,6],recevi:6,recip:13,record:[4,7,8,10,13,17],recordset:8,recurs:1,refer:[4,9,12],refus:16,regist:[1,4,6,9],regular:13,reilli:13,reject:[10,14],rel:15,relat:[9,12,17],releas:12,reliabl:13,remain:[8,16],rememb:13,remove_notice_handl:6,remove_notify_handl:6,repeat:[13,15],replac:15,replic:14,report:[9,14],repres:[9,15],represent:[1,13,14],request:[1,14,15],requir:[1,4,8,9,12,13,14,16],resembl:13,reserv:4,reservednam:9,resourc:[8,9,10,17],respons:14,rest:13,restrictviol:9,result:[1,7,8,10,14,15,16],retriev:[8,17],revert:16,review:8,rewritten:10,right:[1,16],robust:13,role:9,roll:[6,16],rollback:[6,9,16,17],roughli:[13,17],rourk:15,routin:9,row:[7,8,14],rowcount:8,rule:[1,9,15],run:[4,12,13,14,16],runtim:13,safe:15,same:[1,4,6,7,8,13,14,16,17],sanitis:1,save_number_of_success:16,savepoint:[6,9,16],savepoint_nam:6,savepointexcept:9,scale:8,scari:12,scatter:4,schema:[9,15],schema_nam:[9,14],schemaanddatastatementmixingnotsupport:9,scope:1,scratch:1,script:16,search:[5,11],second:13,section:1,secur:[15,16],seduc:13,see:[0,4,6,7,8,10,13,14,17],seen:[4,14],select:[0,4,8,10,13,14,15,16,17],self:[8,12],semant:10,semicolon:10,send:[4,6,8,10,13,17],sens:1,sent:[6,8,9,13,14],separ:[8,10,13,15],seq:15,sequenc:[7,8,13,15],sequencegeneratorlimitexceed:9,seri:16,serial:17,serializationfailur:9,seriou:15,server:[1,6,8,9,11,13,14,16],session:[4,6,8,16,17],set:[8,10,14],set_autocommit:6,set_client_encod:6,set_config:10,setter:6,sever:[1,4,8,9,10,13,14,16,17],severity_nonloc:[9,14],share:[6,8],should:[0,1,4,6,8,10,12,13,14,15],shouldn:[1,13],show:[0,14,17],side:[1,9,11,13],similar:[6,10,15],simpl:16,simplest:4,simpli:12,simplist:10,singl:[9,10,13,14,15],single_tupl:14,singletonsqljsonitemrequir:9,sit:13,site:13,situat:12,size:8,slightli:10,smaller:0,smallint:0,snapshot:9,snapshottooold:9,snip:15,snippet:15,socket:14,some:[0,1,4,7,8,12,13,15,17],some_t:[13,15],someth:6,sometim:[0,10,13],somewhat:15,somewher:15,soon:[6,16],sort:15,sourc:[7,9,13,15],source_fil:[9,14],source_funct:[9,14],source_lin:[9,14],specif:[1,9,14],specifi:[1,6,8,9,13,15,16],sql:[0,1,3,5,7,8,9,10,14,17],sqlclientunabletoestablishsqlconnect:9,sqlite3:17,sqljsonarraynotfound:9,sqljsonmembernotfound:9,sqljsonnumbernotfound:9,sqljsonobjectnotfound:9,sqljsonscalarrequir:9,sqlroutineexcept:9,sqlserverrejectedestablishmentofsqlconnect:9,sqlstate:14,sqlstatementnotyetcomplet:9,src:1,srfprotocolviol:9,stack:16,stackeddiagnosticsaccessedwithoutactivehandl:9,standard:[0,9],start:[6,11,12,14,16],state:[1,6,9,12,14,16],statement:[6,7,8,9,13,15],statement_posit:[9,14],statementcompletionunknown:9,statementtoocomplex:9,statu:14,stdin:7,stdout:7,steal:13,step:4,still:[4,9,12,15],stop:[4,16],store:16,str:[0,1,6,8,9,13,14,15],stream:[7,14],stress:13,strict:11,string:[1,3,6,8,9,13,14],stringdatalengthmismatch:9,stringdatarighttrunc:9,strong:11,structur:10,stuff:1,style:15,subclass:[1,9,15],substringerror:9,subtl:13,success:14,successfulli:16,sudo:12,suggest:10,suitabl:[7,15],sunglass:13,support:[4,7,9,10,11,13,15],suppos:12,sure:[16,17],surpris:[10,16],suspend:16,sync:[4,6,9],syntax:[8,9,10,13],syntaxerror:[9,10,13],syntaxerrororaccessruleviol:9,system:[1,9,12,13,14],systemerror:9,tabl:[0,7,8,9,13,15,16,17],table_nam:[7,9,14,15],take:[6,13],taken:16,tape:13,target:[0,16],tbl:15,tell:1,templat:15,termin:[8,9,16,17],terribl:13,test:[4,17],text:[0,1,6,8,14,15,17],textual:13,than:[0,4,8,9,14,15],thei:[1,4,6,7,8,9,10,15,16,17],them:[0,1,4,6,10,13,15,17],thi:[0,1,4,6,8,9,10,12,13,14,15,16,17],thing:[4,7,12],though:[8,12],thread:6,three:[7,13],time:[0,4,8,13,15,16],timedelta:0,timestamp:0,timestamptz:0,timetz:0,timezon:10,todo:[6,8],toilet:13,token:14,too:[8,13,15],tool:14,toomanyargu:9,toomanycolumn:9,toomanyconnect:9,toomanyjsonarrayel:9,toomanyjsonobjectmemb:9,toomanyrow:9,topic:[10,11,17],transact:[4,5,6,8,9,10,14,17],transactionintegrityconstraintviol:9,transactionresolutionunknown:9,transactionrollback:9,transactionstatu:14,transfer:14,transform:[1,15],transpar:16,trasform:1,tri:10,trigger:9,triggeredactionexcept:9,triggereddatachangeviol:9,triggerprotocolviol:9,trimerror:9,troubleshoot:12,tupl:[0,7,8,10,13,14],tuples_ok:14,two:[4,16],tx1:16,tx2:16,tye:13,type:[5,8,9,10,11,13,15,17],type_cod:8,typic:13,unaffect:16,unauthor:13,unbalanc:16,unbound:0,uncommit:8,undefin:1,undefinedcolumn:9,undefinedfil:9,undefinedfunct:[0,9,10],undefinedobject:9,undefinedparamet:9,undefinedt:9,under:9,undergo:15,understood:[1,14],undesir:16,unescap:13,unexpect:9,union:[6,8,14,15],uniqueviol:9,unknown:14,unless:[6,8,16],unlik:14,unpack:8,unregist:6,unreliable_oper:16,unsafenewenumvalueusag:9,unterminatedcstr:9,until:[6,16],untouch:15,untranslatablecharact:9,untrust:[13,15],updat:8,upgrad:12,upon:4,url:6,usabl:14,usag:[4,5,10],use:[0,1,4,6,7,8,9,10,11,12,13,14,15,16,17],used:[1,4,6,8,9,10,11,12,13,14,15],useful:[1,4,15],user:[4,17],uses:[6,10],using:[1,4,6,7,8,10,13,14,15,16,17],usual:[6,9,10,14,15],utc:10,utf8:14,util:14,uuid:[0,1,10],vacuum:16,valid:[4,9],valu:[0,1,4,6,7,9,13,14,15,17],valueerror:16,varchar:[0,8],variabl:[6,13,15],verifi:16,version:[1,6,9,14],via:[12,13],view:[1,8],violat:9,visibl:16,wai:[0,1,4,7,8,12,13,15,16],wait:[14,15],want:[1,6,8,13,15,16],warn:[1,9,14],weak:15,web:13,well:1,were:6,what:[4,6,8,9,13],when:[0,1,4,6,8,9,10,13,14,15,16],whenev:[4,6],where:[1,4,13,15,16],wherea:[10,13],which:[1,4,6,7,8,9,10,12,14,15],who:[11,13],whose:[1,15],widespread:13,windowingerror:9,wise:10,wish:4,withcheckoptionviol:9,within:[1,6],without:[1,12],won:[1,15],work:[1,10,12,14,15],would:[7,10,16],wrap:[10,15],wrapper:[0,3,6,9,10],writabl:6,write:[6,7,8,9,10,13,14,16],write_row:[7,8],wrong:[9,13],wrongobjecttyp:9,xx000:9,xx001:9,xx002:9,yet:[9,12,16],yield:6,you:[0,1,4,6,7,8,9,10,12,13,14,15,16,17],your:[0,1,6,12,13,15],zero:9,zerolengthcharacterstr:9},titles:["Adaptation between Python and PostgreSQL types","Data adaptation configuration","Advanced topics","<code class=\"docutils literal notranslate\"><span class=\"pre\">psycopg3</span></code> API","Async operations","Getting started with <code class=\"docutils literal notranslate\"><span class=\"pre\">psycopg3</span></code>","Connection classes","Using COPY TO and COPY FROM","Cursor classes","<code class=\"xref py py-obj docutils literal notranslate\"><span class=\"pre\">errors</span></code> \u2013 package exceptions","Differences from <code class=\"docutils literal notranslate\"><span class=\"pre\">psycopg2</span></code>","Psycopg 3 \u2013 PostgreSQL database adapter for Python","Installation","Passing parameters to SQL queries","<code class=\"xref py py-obj docutils literal notranslate\"><span class=\"pre\">pq</span></code> \u2013 Libpq wrapper module","<code class=\"xref py py-obj docutils literal notranslate\"><span class=\"pre\">sql</span></code> \u2013 SQL string composition","Transaction management","Basic module usage"],titleterms:{"boolean":0,"class":[6,8],"function":[14,15],"int":10,"new":10,The:[6,8],Using:7,adapt:[0,1,10,11],advanc:2,api:[3,9],argument:13,async:4,asyncconnect:6,asynccursor:8,asynchron:4,autocommit:16,base:10,basic:17,between:0,binari:13,bind:10,block:16,callproc:10,composit:15,configur:1,connect:[4,6,10],content:14,copi:[7,10],cursor:[4,8],cycl:1,danger:13,data:1,databas:11,differ:10,document:11,dumper:1,enumer:14,error:9,except:9,execut:13,file:10,from:[7,10],get:5,gone:10,implement:14,indic:[5,11],inject:13,instal:12,involv:1,libpq:[12,14],life:1,loader:1,main:17,manag:16,modul:[14,15,17],more:10,notif:4,number:0,object:[1,6,8,14,15,17],oper:4,packag:9,paramet:13,pass:13,postgresql:[0,11],proper:12,psycopg2:10,psycopg3:[3,5,10,12,17],psycopg:11,pure:12,python:[0,11,12],queri:13,quick:12,result:13,server:10,side:10,sql:[13,15],sqlstate:9,start:5,stricter:10,string:15,structur:14,support:[6,8],system:10,tabl:[5,11],todo:[0,1,10,12,13,14],topic:2,transact:16,type:[0,1],usag:[15,17],util:15,what:10,wrap:14,wrapper:14}})