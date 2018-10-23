const values = {
  APEX_NAMES: {
    TRIGGER_USAGE: "apex.jorje.data.ast.TriggerUsage",
    LOCATION_IDENTIFIER: "apex.jorje.data.Identifiers$LocationIdentifier",
    PARSER_OUTPUT: "apex.jorje.semantic.compiler.parser.ParserOutput",
    CLASS_TYPE_REF: "apex.jorje.data.ast.TypeRefs$ClassTypeRef",
    ARRAY_TYPE_REF: "apex.jorje.data.ast.TypeRefs$ArrayTypeRef",
    MODIFIER: "apex.jorje.data.ast.Modifier",
    ANNOTATION: "apex.jorje.data.ast.Modifier$Annotation",
    ANNOTATION_KEY_VALUE:
      "apex.jorje.data.ast.AnnotationParameter$AnnotationKeyValue",
    ANNOTATION_VALUE: "apex.jorje.data.ast.AnnotationValue",
    EMPTY_MODIFIER_PARAMETER_REF:
      "apex.jorje.data.ast.ParameterRefs$EmptyModifierParameterRef",
    BLOCK_STATEMENT: "apex.jorje.data.ast.Stmnt$BlockStmnt",
    RETURN_STATEMENT: "apex.jorje.data.ast.Stmnt$ReturnStmnt",
    VARIABLE_DECLARATION_STATEMENT:
      "apex.jorje.data.ast.Stmnt$VariableDeclStmnt",
    VARIABLE_DECLARATIONS: "apex.jorje.data.ast.VariableDecls",
    NAME_VALUE_PARAMETER: "apex.jorje.data.ast.NameValueParameter",
    IF_ELSE_BLOCK: "apex.jorje.data.ast.Stmnt$IfElseBlock",
    IF_BLOCK: "apex.jorje.data.ast.IfBlock",
    ELSE_BLOCK: "apex.jorje.data.ast.ElseBlock",
    EXPRESSION_STATEMENT: "apex.jorje.data.ast.Stmnt$ExpressionStmnt",
    RUN_AS_BLOCK: "apex.jorje.data.ast.Stmnt$RunAsBlock",
    WHILE_LOOP: "apex.jorje.data.ast.Stmnt$WhileLoop",
    DO_LOOP: "apex.jorje.data.ast.Stmnt$DoLoop",
    FOR_LOOP: "apex.jorje.data.ast.Stmnt$ForLoop",
    FOR_C_STYLE_CONTROL: "apex.jorje.data.ast.ForControl$CStyleForControl",
    FOR_ENHANCED_CONTROL: "apex.jorje.data.ast.ForControl$EnhancedForControl",
    FOR_INITS: "apex.jorje.data.ast.ForInits",
    FOR_INIT: "apex.jorje.data.ast.ForInit",
    BREAK_STATEMENT: "apex.jorje.data.ast.Stmnt$BreakStmnt",
    CONTINUE_STATEMENT: "apex.jorje.data.ast.Stmnt$ContinueStmnt",
    THROW_STATEMENT: "apex.jorje.data.ast.Stmnt$ThrowStmnt",
    TRY_CATCH_FINALLY_BLOCK: "apex.jorje.data.ast.Stmnt$TryCatchFinallyBlock",
    CATCH_BLOCK: "apex.jorje.data.ast.CatchBlock",
    FINALLY_BLOCK: "apex.jorje.data.ast.FinallyBlock",
    STATEMENT: "apex.jorje.data.ast.Stmnt",
    DML_INSERT_STATEMENT: "apex.jorje.data.ast.Stmnt$DmlInsertStmnt",
    DML_UPDATE_STATEMENT: "apex.jorje.data.ast.Stmnt$DmlUpdateStmnt",
    DML_UPSERT_STATEMENT: "apex.jorje.data.ast.Stmnt$DmlUpsertStmnt",
    DML_DELETE_STATEMENT: "apex.jorje.data.ast.Stmnt$DmlDeleteStmnt",
    DML_UNDELETE_STATEMENT: "apex.jorje.data.ast.Stmnt$DmlUndeleteStmnt",
    DML_MERGE_STATEMENT: "apex.jorje.data.ast.Stmnt$DmlMergeStmnt",
    SWITCH_STATEMENT: "apex.jorje.data.ast.Stmnt$SwitchStmnt",
    VALUE_WHEN: "apex.jorje.data.ast.WhenBlock$ValueWhen",
    ELSE_WHEN: "apex.jorje.data.ast.WhenBlock$ElseWhen",
    TYPE_WHEN: "apex.jorje.data.ast.WhenBlock$TypeWhen",
    ENUM_CASE: "apex.jorje.data.ast.WhenCase$EnumCase",
    LITERAL_CASE: "apex.jorje.data.ast.WhenCase$LiteralCase",
    PROPERTY_DECLATION: "apex.jorje.data.ast.PropertyDecl",
    PROPERTY_GETTER: "apex.jorje.data.ast.PropertyGetter",
    PROPERTY_SETTER: "apex.jorje.data.ast.PropertySetter",

    // Operators
    BINARY_OPERATOR: "apex.jorje.data.ast.BinaryOp",
    ASSIGNMENT_OPERATOR: "apex.jorje.data.ast.AssignmentOp",
    BOOLEAN_OPERATOR: "apex.jorje.data.ast.BooleanOp",
    POSTFIX_OPERATOR: "apex.jorje.data.ast.PostfixOp",
    PREFIX_OPERATOR: "apex.jorje.data.ast.PrefixOp",

    // Declaration
    CLASS_DECLARATION: "apex.jorje.data.ast.ClassDecl",
    INTERFACE_DECLARATION: "apex.jorje.data.ast.InterfaceDecl",
    METHOD_DECLARATION: "apex.jorje.data.ast.MethodDecl",
    VARIABLE_DECLARATION: "apex.jorje.data.ast.VariableDecl",
    ENUM_DECLARATION: "apex.jorje.data.ast.EnumDecl",

    // Compilation Unit
    CLASS_DECLARATION_UNIT: "apex.jorje.data.ast.CompilationUnit$ClassDeclUnit",
    ENUM_DECLARATION_UNIT: "apex.jorje.data.ast.CompilationUnit$EnumDeclUnit",
    TRIGGER_DECLARATION_UNIT:
      "apex.jorje.data.ast.CompilationUnit$TriggerDeclUnit",
    INTERFACE_DECLARATION_UNIT:
      "apex.jorje.data.ast.CompilationUnit$InterfaceDeclUnit",

    // Block Member
    PROPERTY_MEMBER: "apex.jorje.data.ast.BlockMember$PropertyMember",
    FIELD_MEMBER: "apex.jorje.data.ast.BlockMember$FieldMember",
    STATEMENT_BLOCK_MEMBER: "apex.jorje.data.ast.BlockMember$StmntBlockMember",
    STATIC_STATEMENT_BLOCK_MEMBER:
      "apex.jorje.data.ast.BlockMember$StaticStmntBlockMember",
    METHOD_MEMBER: "apex.jorje.data.ast.BlockMember$MethodMember",
    INNER_ENUM_MEMBER: "apex.jorje.data.ast.BlockMember$InnerEnumMember",
    INNER_CLASS_MEMBER: "apex.jorje.data.ast.BlockMember$InnerClassMember",
    INNER_INTERFACE_MEMBER:
      "apex.jorje.data.ast.BlockMember$InnerInterfaceMember",

    // Expression
    METHOD_CALL_EXPRESSION: "apex.jorje.data.ast.Expr$MethodCallExpr",
    BINARY_EXPRESSION: "apex.jorje.data.ast.Expr$BinaryExpr",
    LITERAL_EXPRESSION: "apex.jorje.data.ast.Expr$LiteralExpr",
    VARIABLE_EXPRESSION: "apex.jorje.data.ast.Expr$VariableExpr",
    THIS_VARIABLE_EXPRESSION: "apex.jorje.data.ast.Expr$ThisVariableExpr",
    BOOLEAN_EXPRESSION: "apex.jorje.data.ast.Expr$BooleanExpr",
    NESTED_EXPRESSION: "apex.jorje.data.ast.Expr$NestedExpr",
    TERNARY_EXPRESSION: "apex.jorje.data.ast.Expr$TernaryExpr",
    ASSIGNMENT_EXPRESSION: "apex.jorje.data.ast.Expr$AssignmentExpr",
    TRIGGER_VARIABLE_EXPRESSION: "apex.jorje.data.ast.Expr$TriggerVariableExpr",
    PREFIX_EXPRESSION: "apex.jorje.data.ast.Expr$PrefixExpr",
    POSTFIX_EXPRESSION: "apex.jorje.data.ast.Expr$PostfixExpr",
    NEW_EXPRESSION: "apex.jorje.data.ast.Expr$NewExpr",
    CAST_EXPRESSION: "apex.jorje.data.ast.Expr$CastExpr",
    INSTANCE_OF_EXPRESSION: "apex.jorje.data.ast.Expr$InstanceOf",
    PACKAGE_VERSION_EXPRESSION: "apex.jorje.data.ast.Expr$PackageVersionExpr",
    ARRAY_EXPRESSION: "apex.jorje.data.ast.Expr$ArrayExpr",
    SUPER_VARIABLE_EXPRESSION: "apex.jorje.data.ast.Expr$SuperVariableExpr",
    CLASS_REF_EXPRESSION: "apex.jorje.data.ast.Expr$ClassRefExpr",
    THIS_METHOD_CALL_EXPRESSION: "apex.jorje.data.ast.Expr$ThisMethodCallExpr",
    SUPER_METHOD_CALL_EXPRESSION:
      "apex.jorje.data.ast.Expr$SuperMethodCallExpr",
    SOQL_EXPRESSION: "apex.jorje.data.ast.Expr$SoqlExpr",
    SOSL_EXPRESSION: "apex.jorje.data.ast.Expr$SoslExpr",

    // New Object Init
    NEW_SET_INIT: "apex.jorje.data.ast.NewObject$NewSetInit",
    NEW_SET_LITERAL: "apex.jorje.data.ast.NewObject$NewSetLiteral",
    NEW_LIST_INIT: "apex.jorje.data.ast.NewObject$NewListInit",
    NEW_LIST_LITERAL: "apex.jorje.data.ast.NewObject$NewListLiteral",
    NEW_MAP_INIT: "apex.jorje.data.ast.NewObject$NewMapInit",
    NEW_MAP_LITERAL: "apex.jorje.data.ast.NewObject$NewMapLiteral",
    NEW_STANDARD: "apex.jorje.data.ast.NewObject$NewStandard",
    NEW_KEY_VALUE: "apex.jorje.data.ast.NewObject$NewKeyValue",
    MAP_LITERAL_KEY_VALUE: "apex.jorje.data.ast.MapLiteralKeyValue",

    // SOSL
    SEARCH: "apex.jorje.data.sosl.Search",
    FIND_CLAUSE: "apex.jorje.data.sosl.FindClause",
    FIND_VALUE: "apex.jorje.data.sosl.FindValue",
    IN_CLAUSE: "apex.jorje.data.sosl.InClause",

    // SOQL
    QUERY: "apex.jorje.data.soql.Query",
    SELECT_INNER_QUERY: "apex.jorje.data.soql.SelectExpr$SelectInnerQuery",
    SELECT_COLUMN_CLAUSE:
      "apex.jorje.data.soql.SelectClause$SelectColumnClause",
    SELECT_COUNT_CLAUSE: "apex.jorje.data.soql.SelectClause$SelectCountClause",
    SELECT_COLUMN_EXPRESSION:
      "apex.jorje.data.soql.SelectExpr$SelectColumnExpr",
    SELECT_CASE_EXPRESSION: "apex.jorje.data.soql.SelectExpr$SelectCaseExpr",
    CASE_EXPRESSION: "apex.jorje.data.soql.CaseExpr",
    CASE_OPERATOR: "apex.jorje.data.soql.CaseOp",
    WHEN_EXPRESSION: "apex.jorje.data.soql.WhenExpr",
    WHEN_OPERATOR: "apex.jorje.data.soql.WhenOp",
    ELSE_EXPRESSION: "apex.jorje.data.soql.ElseExpr",
    FIELD: "apex.jorje.data.soql.Field",
    FIELD_IDENTIFIER: "apex.jorje.data.soql.FieldIdentifier",
    FROM_CLAUSE: "apex.jorje.data.soql.FromClause",
    FROM_EXPRESSION: "apex.jorje.data.soql.FromExpr",
    WHERE_CLAUSE: "apex.jorje.data.soql.WhereClause",
    WHERE_INNER_EXPRESSION: "apex.jorje.data.soql.WhereExpr$WhereInnerExpr",
    WHERE_OPERATION_EXPRESSION: "apex.jorje.data.soql.WhereExpr$WhereOpExpr",
    WHERE_OPERATION_EXPRESSIONS: "apex.jorje.data.soql.WhereExpr$WhereOpExprs",
    APEX_EXPRESSION: "apex.jorje.data.soql.QueryExpr$ApexExpr",
    COLON_EXPRESSION: "apex.jorje.data.soql.ColonExpr",
    ORDER_BY_CLAUSE: "apex.jorje.data.soql.OrderByClause",
    ORDER_BY_EXPRESSION: "apex.jorje.data.soql.OrderByExpr",
    GROUP_BY_CLAUSE: "apex.jorje.data.soql.GroupByClause",
    GROUP_BY_EXPRESSION: "apex.jorje.data.soql.GroupByExpr",
    GROUP_BY_TYPE: "apex.jorje.data.soql.GroupByType",
    HAVING_CLAUSE: "apex.jorje.data.soql.HavingClause",
    LIMIT_VALUE: "apex.jorje.data.soql.LimitClause$LimitValue",
    LIMIT_EXPRESSION: "apex.jorje.data.soql.LimitClause$LimitExpr",
    OFFSET_VALUE: "apex.jorje.data.soql.OffsetClause$OffsetValue",
    OFFSET_EXPRESSION: "apex.jorje.data.soql.OffsetClause$OffsetExpr",
    WHERE_COMPOUND_EXPRESSION:
      "apex.jorje.data.soql.WhereExpr$WhereCompoundExpr",
    WHERE_COMPOUND_OPERATOR: "apex.jorje.data.soql.WhereCompoundOp",
    WHERE_UNARY_EXPRESSION: "apex.jorje.data.soql.WhereExpr$WhereUnaryExpr",
    WHERE_UNARY_OPERATOR: "apex.jorje.data.soql.WhereUnaryOp",
    WHERE_DISTANCE_EXPRESSION:
      "apex.jorje.data.soql.WhereExpr$WhereDistanceExpr",
    DISTANCE_FUNCTION_EXPRESSION: "apex.jorje.data.soql.DistanceFunctionExpr",
    GEOLOCATION_LITERAL: "apex.jorje.data.soql.Geolocation$GeolocationLiteral",
    QUERY_LITERAL_EXPRESSION: "apex.jorje.data.soql.QueryExpr$LiteralExpr",
    QUERY_LITERAL: "apex.jorje.data.soql.QueryLiteral",
    QUERY_OPERATOR: "apex.jorje.data.soql.QueryOp",
    SOQL_ORDER: "apex.jorje.data.soql.Order",
    SOQL_ORDER_NULL: "apex.jorje.data.soql.OrderNull",
    TRACKING_TYPE: "apex.jorje.data.soql.TrackingType",
    QUERY_OPTION: "apex.jorje.data.soql.QueryOption",
    QUERY_USING_CLAUSE: "apex.jorje.data.soql.QueryUsingClause",
    USING: "apex.jorje.data.soql.UsingExpr$Using",
    UPDATE_STATS_CLAUSE: "apex.jorje.data.soql.UpdateStatsClause",
    UPDATE_STATS_OPTION: "apex.jorje.data.soql.UpdateStatsOption",
    WITH_VALUE: "apex.jorje.data.soql.WithClause$WithValue",
    WITH_DATA_CATEGORIES: "apex.jorje.data.soql.WithClause$WithDataCategories",
    DATA_CATEGORY: "apex.jorje.data.soql.DataCategory",
    DATA_CATEGORY_OPERATOR: "apex.jorje.data.soql.DataCategoryOperator",
  },
  BINARY: {
    ADDITION: "+",
    SUBTRACTION: "-",
    MULTIPLICATION: "*",
    DIVISION: "/",
    LEFT_SHIFT: "<<",
    RIGHT_SHIFT: ">>",
    UNSIGNED_RIGHT_SHIFT: ">>>",
    XOR: "^",
    AND: "&",
    OR: "|",
  },
  BOOLEAN: {
    DOUBLE_EQUAL: "==",
    TRIPLE_EQUAL: "===",
    NOT_TRIPLE_EQUAL: "!==",
    NOT_EQUAL: "!=",
    ALT_NOT_EQUAL: "<>",
    LESS_THAN: "<",
    GREATER_THAN: ">",
    LESS_THAN_EQUAL: "<=",
    GREATER_THAN_EQUAL: ">=",
    AND: "&&",
    OR: "||",
  },
  ASSIGNMENT: {
    EQUALS: "=",
    AND_EQUALS: "&=",
    OR_EQUALS: "|=",
    XOR_EQUALS: "^=",
    ADDITION_EQUALS: "+=",
    SUBTRACTION_EQUALS: "-=",
    MULTIPLICATION_EQUALS: "*=",
    DIVISION_EQUALS: "/=",
    LEFT_SHIFT_EQUALS: "<<=",
    RIGHT_SHIFT_EQUALS: ">>=",
    UNSIGNED_RIGHT_SHIFT_EQUALS: ">>>=",
  },
  POSTFIX: {
    INC: "++",
    DEC: "--",
  },
  PREFIX: {
    POSITIVE: "+",
    NEGATIVE: "-",
    NOT: "!",
    BITWISE_COMPLEMENT: "~",
    INC: "++",
    DEC: "--",
  },
  QUERY: {
    QueryIncludes: "INCLUDES",
    QueryExcludes: "EXCLUDES",
    QueryEqual: "=",
    QueryDoubleEqual: "==",
    QueryTripleEqual: "===",
    QueryNotEqual: "!=",
    QueryNotTripleEqual: "!==",
    QueryLike: "LIKE",
    QueryLessThanEqual: "<=",
    QueryGreaterThanEqual: ">=",
    QueryLessThan: "<",
    QueryGreaterThan: ">",
    QueryIn: "IN",
    QueryNotIn: "NOT IN",
  },
  ORDER: {
    OrderDesc: "DESC",
    OrderAsc: "ASC",
  },
  ORDER_NULL: {
    OrderNullFirst: "NULLS FIRST",
    OrderNullLast: "NULLS LAST",
  },
  QUERY_WHERE: {
    QueryAnd: "AND",
    QueryOr: "OR",
  },
  MODIFIER: {
    PublicModifier: "public",
    PrivateModifier: "private",
    VirtualModifier: "virtual",
    HiddenModifier: "hidden",
    ProtectedModifier: "protected",
    AbstractModifier: "abstract",
    StaticModifier: "static",
    TestMethodModifier: "testMethod",
    WebServiceModifier: "webService",
    FinalModifier: "final",
    TransientModifier: "transient",
    GlobalModifier: "global",
    WithoutSharingModifier: "without sharing",
    WithSharingModifier: "with sharing",
    InheritedSharingModifier: "inherited sharing",
    OverrideModifier: "override",
  },
  DATA_CATEGORY: {
    DataCategoryAt: "AT",
    DataCategoryAbove: "ABOVE",
    DataCategoryBelow: "BELOW",
    DataCategoryAboveOrBelow: "ABOVE_OR_BELOW",
  },
  TRIGGER_USAGE: {
    BEFORE_DELETE: "before delete",
    BEFORE_INSERT: "before insert",
    BEFORE_UPDATE: "before update",
    BEFORE_UNDELETE: "before undelete",
    AFTER_DELETE: "after delete",
    AFTER_INSERT: "after insert",
    AFTER_UPDATE: "after update",
    AFTER_UNDELETE: "after undelete",
  },
};

values.ALLOW_TRAILING_EMPTY_LINE = [
  values.APEX_NAMES.BLOCK_STATEMENT,
  values.APEX_NAMES.EXPRESSION_STATEMENT,
  values.APEX_NAMES.DML_INSERT_STATEMENT,
  values.APEX_NAMES.DML_UPDATE_STATEMENT,
  values.APEX_NAMES.DML_UPSERT_STATEMENT,
  values.APEX_NAMES.DML_DELETE_STATEMENT,
  values.APEX_NAMES.DML_UNDELETE_STATEMENT,
  values.APEX_NAMES.DML_MERGE_STATEMENT,
  values.APEX_NAMES.VARIABLE_DECLARATION_STATEMENT,
  values.APEX_NAMES.IF_ELSE_BLOCK,
  values.APEX_NAMES.TRY_CATCH_FINALLY_BLOCK,
  values.APEX_NAMES.DO_LOOP,
  values.APEX_NAMES.FOR_LOOP,
  values.APEX_NAMES.WHILE_LOOP,
  values.APEX_NAMES.RETURN_STATEMENT,
  values.APEX_NAMES.THROW_STATEMENT,
  values.APEX_NAMES.BREAK_STATEMENT,
  values.APEX_NAMES.CONTINUE_STATEMENT,
  values.APEX_NAMES.SWITCH_STATEMENT,
  values.APEX_NAMES.ENUM_DECLARATION,
  values.APEX_NAMES.CLASS_DECLARATION,
  values.APEX_NAMES.INTERFACE_DECLARATION,
  values.APEX_NAMES.FIELD_MEMBER,
  values.APEX_NAMES.PROPERTY_MEMBER,
  values.APEX_NAMES.METHOD_MEMBER,
  values.APEX_NAMES.INNER_CLASS_MEMBER,
  values.APEX_NAMES.INNER_INTERFACE_MEMBER,
  values.APEX_NAMES.INNER_ENUM_MEMBER,
];

values.TRAILING_EMPTY_LINE_AFTER_LAST_NODE = [
  values.APEX_NAMES.VARIABLE_DECLARATION_STATEMENT,
  values.APEX_NAMES.IF_ELSE_BLOCK,
  values.APEX_NAMES.TRY_CATCH_FINALLY_BLOCK,
  values.APEX_NAMES.DO_LOOP,
  values.APEX_NAMES.FOR_LOOP,
  values.APEX_NAMES.WHILE_LOOP,
  values.APEX_NAMES.SWITCH_STATEMENT,
  values.APEX_NAMES.FIELD_MEMBER,
  values.APEX_NAMES.PROPERTY_MEMBER,
  values.APEX_NAMES.METHOD_MEMBER,
  values.APEX_NAMES.INNER_CLASS_MEMBER,
  values.APEX_NAMES.INNER_INTERFACE_MEMBER,
  values.APEX_NAMES.INNER_ENUM_MEMBER,
];

module.exports = values;
